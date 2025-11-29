import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";
import qs from "qs";

const homepageQuery = () =>
  qs.stringify({
    populate: {
      blocks: {
        on: {
          "homepage.hero-section": {
            populate: {
              button: true,
              icons: {
                fields: ["url", "name"],
              },
              image: {
                fields: ["url", "name"],
              },
            },
          },
          "homepage.build-the-future": {
            populate: {
              cards: {
                populate: {
                  icon: {
                    fields: ["url", "name"],
                  },
                },
              },
            },
          },
          "homepage.expert-advice": {
            populate: {
              cards: {
                populate: {
                  icon: {
                    fields: ["url", "name"],
                  },
                  bg: {
                    fields: ["url", "name"],
                  },
                },
              },
              card: true,
            },
          },
          "homepage.see-what": {
            populate: {
              image: {
                fields: ["url", "name"],
              },
              cards: {
                populate: {
                  profile: {
                    fields: ["name", "url"],
                  },
                },
              },
            },
          },
        },
      },
    },
  });

export async function getHomepageData() {
  const path = "/api/homepage";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = homepageQuery();
  return await fetchAPI(url.href, { method: "GET" });
}

const globalQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
        "layout.header": {
          populate: {
            logo: {
              fields: ["url", "name", "alternativeText"],
            },
            links: {
              populate: true,
            },
            button: {
              populate: {
                icon: {
                  fields: ["url", "name"],
                },
              },
            },
          },
        },
        "global.cta": {
          populate: {
            button: {
              populate: {
                icon: {
                  fields: ["url", "name"],
                },
              },
            },
          },
        },
        "global.footer": {
          populate: {
            services: {
              populate: true,
            },
            resources: {
              populate: true,
            },
            contact: {
              populate: {
                image: {
                  fields: ["url", "name", "alternativeText"],
                },
              },
            },
            social: {
              populate: {
                icon: {
                  fields: ["url", "name", "alternativeText"],
                },
              },
            },
            links: {
              populate: true,
            },
          },
        },
      },
    },
  },
});

export async function getGlobalData() {
  const path = "/api/global";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = globalQuery;
  return await fetchAPI(url.href, { method: "GET" });
}

function buildPageQuery(slug: string) {
  let populateOptions = {};

  if (slug === "about") {
    populateOptions = {
      populate: {
        blocks: {
          on: {
            "aboutpage.hero-section": {
              populate: {
                image: {
                  fields: ["url", "name", "alternativeText"],
                },
              },
            },
            "aboutpage.our-story": {
              populate: {
                image: {
                  fields: ["url", "name", "alternativeText"],
                },
              },
            },
            "aboutpage.our-mission": {
              populate: {
                blueCard: true, // No media to populate, just text fields
                cards: {
                  populate: {
                    icon: {
                      fields: ["url", "name", "alternativeText"],
                    },
                  },
                },
              },
            },
            "aboutpage.our-team": {
              populate: {
                cards: {
                  populate: {
                    image: {
                      fields: ["url", "name", "alternativeText"],
                    },
                  },
                },
              },
            },
            "aboutpage.why-clients": {
              populate: {
                cards: {
                  populate: {
                    icon: {
                      fields: ["url", "name", "alternativeText"],
                    },
                  },
                },
              },
            },
          },
        },
      },
    };
  }

  return qs.stringify(
    {
      filters: { slug: { $eq: slug } },
      ...populateOptions,
    },
    { encodeValuesOnly: true }
  );
}

export async function getPageData(slug: string) {
  const BASE_URL = getStrapiURL();
  const query = buildPageQuery(slug);
  const url = `${BASE_URL}/api/pages?${query}`;
  const response = await fetchAPI(url, { method: "GET" });
  return response;
}

const blogQuery = qs.stringify({
  populate: {
    bg: {
      fields: ["url", "name", "alternativeText"],
    },
  },
});

export async function getBlogData() {
  const path = "/api/blogs";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = blogQuery;
  return await fetchAPI(url.href, { method: "GET" });
}

export async function getBlogBySlug(slug: string) {
  const BASE_URL = getStrapiURL();
  const query = qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      bg: {
        fields: ["url", "name", "alternativeText"],
      },
    },
  });

  const url = `${BASE_URL}/api/blogs?${query}`;
  return await fetchAPI(url, { method: "GET" });
}
