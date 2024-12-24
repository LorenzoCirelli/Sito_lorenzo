// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@nuxt/fonts", "dayjs-nuxt"],
  i18n: {
    vueI18n: "./i18n/config.ts",
  },
});