import { getStrapiURL } from "@/utils/get-strapi-url";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getStrapiMedia(url: string | null | undefined) {
  if (!url || typeof url !== "string") return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  // Always ensure a single slash between host and path
  const path = url.startsWith("/") ? url : `/${url}`;
  return `${getStrapiURL()}${path}`;
}
