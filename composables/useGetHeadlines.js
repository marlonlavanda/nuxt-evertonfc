import { useState } from "#app";
import { onMounted } from "vue";

export function useGetHeadlines() {
  const articles = useState("articles", () => []);
  const status = useState("status", () => "pending");

  const config = useRuntimeConfig();
  const protocol = config.public.NUXT_PROTOCOL;
  const subdomain = config.public.NUXT_NEWS_SUBDOMAIN;
  const siteURL = config.public.NUXT_SITE_URL;
  const url = `${protocol}://${subdomain}.${siteURL}/v2/search?q=(featured:1)&page.size=4&page.number=1&sort=featuredOrder:asc`;

  const fetchHeadlines = async () => {
    try {
      status.value = "pending";

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch headlines: ${response.status}`);
      }

      const data = await response.json();
      articles.value = data.data;
      status.value = "success";
    } catch (error) {
      status.value = "error";
      console.error("Error fetching headlines:", error);
    }
  };

  onMounted(() => {
    fetchHeadlines();
  });

  // watch(() => props, fetchHeadlines, { immediate: true });

  return { articles, status };
}
