import qs from "qs";
import { getStrapiURL } from "@/lib/utils";

const baseUrl = getStrapiURL();

async function fetchData(url: string) {
  const authToken = null; // we will implement this later getAuthToken() later
  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, authToken ? headers : {});
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return null;
  }
}

export async function getHomePageData() {
  const url = new URL("/api/home-page", baseUrl);

  url.search = qs.stringify({
    populate: {
      blocks: {
        on: {
          "layout.hero-section": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
              link: {
                populate: true,
              },
            },
          },
          "layout.features-section": {
            populate: {
              feature: {
                populate: true,
              },
            },
          },
          "layout.dream-home": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
              ctaButton: {
                populate: true,
              },
            },
          },
          "layout.process-section": {
            populate: {
              steps: {
                populate: true,
              },
              ctaButton: {
                populate: true,
              },
            },
          },
          "layout.sub-hero-section": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
              feature: {
                populate: true,
              },
              ctaButton: {
                populate: true,
              },
            },
          },
          "layout.gallery-section": {
            populate: {
              carousal: {
                populate: {
                  image: {
                    fields: ["url", "alternativeText"],
                  },
                },
              },
              ctaButton: {
                populate: true,
              },
            },
          },
          "layout.customer-section": {
            populate: {
              carousel: {
                populate: {
                  image: {
                    fields: ["url", "alternativeText"],
                  },
                },
              },
            },
          },
          "layout.experience-section": {
            populate: {
              carousel: {
                populate: {
                  image: {
                    fields: ["url", "alternativeText"],
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  return await fetchData(url.href);
}

/**
 * Fetch global data from Strapi.
 *
 * The data includes the header and footer components.
 *
 * @returns {Promise<Object>} The global data.
 */
export async function getGlobalData() {
  const url = new URL("/api/global", baseUrl);

  url.search = qs.stringify({
    populate: {
      header: {
        populate: [
          "logoText",
          "ctaButton",
          "dreamHome",
          "howItWorks",
          "projectGallery",
          "pricings",
        ],
      },
      footer: {
        populate: {
          logoText: true,
          socialLink: true,
          pages: {
            populate: ["link"],
          },
        },
      },
    },
  });

  return await fetchData(url.href);
}

export async function getGlobalPageMetadata() {
  const url = new URL("/api/global", baseUrl);

  url.search = qs.stringify({
    fields: ["title", "description"],
  });

  return await fetchData(url.href);
}
