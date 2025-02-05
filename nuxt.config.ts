// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineNuxtConfig({
  alias: {
    "@": path.resolve(__dirname),
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: { plugins: [tailwindcss()] },
  runtimeConfig: {
    public: {
      NUXT_PROTOCOL: process.env.NUXT_PROTOCOL,
      NUXT_NEWS_SUBDOMAIN: process.env.NUXT_NEWS_SUBDOMAIN,
      NUXT_SITE_URL: process.env.NUXT_SITE_URL,
    },
  },
});
