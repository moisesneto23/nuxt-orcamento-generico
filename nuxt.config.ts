// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'vuetify-nuxt-module','@pinia/nuxt'],
  pinia: {
    storesDirs: ['./store/**']
  },
  experimental: {
    cookieStore: true
  }
})