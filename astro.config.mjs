import { defineConfig } from "astro/config";
import node from '@astrojs/node';

import vue from "@astrojs/vue";

export default defineConfig({
  output: 'server',

  adapter: node({
    mode: 'standalone',
  }),

  i18n: {
    locales: ["it", "en"],
    defaultLocale: "en",
    routing: { prefixDefaultLocale: true },
  },

  integrations: [vue()],
});