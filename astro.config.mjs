// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const SITE = "https://www.blueslabvelocity.com";

export default defineConfig({
  site: SITE,
  output: "static",
  trailingSlash: "never",
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "hover",
  },
  build: {
    inlineStylesheets: "auto",
    assets: "_astro",
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes("/api/"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: "lightningcss",
    },
  },
  experimental: {},
});
