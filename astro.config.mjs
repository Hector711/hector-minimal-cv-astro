import { defineConfig } from "astro/config";
import react from "@astrojs/react";


import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es", "pt-br"]
  },
  routing: {
    prefixDefaultLocale: false
  },
  fallback: {
    fr: "es"
  },
  integrations: [react(), tailwind()]
});