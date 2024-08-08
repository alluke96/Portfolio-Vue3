// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@pinia/nuxt', 'nuxt-mdi', "@nuxtjs/i18n"],
  app: {
    baseURL: '/',
    buildAssetsDir: 'public',
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      {
        code: 'pt',
        name: 'Português'
      },
      {
        code: 'en',
        name: 'English'
      }
    ]
  }
})