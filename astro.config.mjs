import { defineConfig } from "astro/config";
import node from '@astrojs/node';

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
});
