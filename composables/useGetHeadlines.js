export function useGetHeadlines() {
  const config = useRuntimeConfig();

  const protocol = config.public.NUXT_PROTOCOL;
  const subdomain = config.public.NUXT_NEWS_SUBDOMAIN;
  const siteURL = config.public.NUXT_SITE_URL;
  const url = `${protocol}://${subdomain}.${siteURL}/v2/search?q=(featured:1)&page.size=4&page.number=1&sort=featuredOrder:asc`;

  const { status, data: articles } = useFetch(url, { lazy: true });

  return { status, articles };
}
