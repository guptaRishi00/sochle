import { getStrapiURL } from "@/utils/get-strapi-url";

type NextFetchRequestConfig = {
  revalidate?: number | false;
  tags?: string[];
};

interface FetchAPIOptions {
  method: "GET" | "POST" | "PUT" | "DELETE";
  authToken?: string;
  body?: Record<string, unknown>;
  next?: NextFetchRequestConfig;
}

export async function fetchAPI(url: string, options: FetchAPIOptions) {
  const { method, authToken, body, next } = options;

  const headers: RequestInit & { next?: NextFetchRequestConfig } = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(authToken && { Authorization: `Bearer ${authToken}` }),
    },
    ...(body && { body: JSON.stringify(body) }),
    ...(next && { next }),
  };

  try {
    const response = await fetch(url, headers);
    const contentType = response.headers.get("content-type");

    if (!response.ok) {
      const errorMessage = `HTTP Error: ${response.status} ${response.statusText}`;
      console.error(`Error ${method} data:`, errorMessage);
      throw new Error(errorMessage);
    }

    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      // Wrap the response with the helper function to fix image URLs
      return prependBaseUrl(data);
    } else {
      return { status: response.status, statusText: response.statusText };
    }
  } catch (error) {
    console.error(`Error ${method} data:`, error);

    // Provide more specific error messages
    if (error instanceof TypeError && error.message.includes("fetch")) {
      throw new Error(
        "Network error: Unable to connect to the server. Please check your internet connection."
      );
    }

    if (error instanceof Error) {
      throw error;
    }

    throw new Error(
      `An unexpected error occurred while making ${method} request.`
    );
  }
}

// Recursive helper function to find and prepend the Strapi URL to image paths
function prependBaseUrl(data: any): any {
  if (!data) return data;

  // If it's an array, map over it
  if (Array.isArray(data)) {
    return data.map(prependBaseUrl);
  }

  // If it's an object, iterate over keys
  if (typeof data === "object") {
    const newData: any = {};
    Object.keys(data).forEach((key) => {
      const value = data[key];

      // Check if the key is 'url' and looks like a relative Strapi upload
      if (
        key === "url" &&
        typeof value === "string" &&
        value.startsWith("/uploads/")
      ) {
        newData[key] = `${getStrapiURL()}${value}`;
      } else {
        // Otherwise, recurse deeper
        newData[key] = prependBaseUrl(value);
      }
    });
    return newData;
  }

  // Return primitives (strings, numbers, booleans) as is
  return data;
}
