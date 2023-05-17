// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css:[
        '@/assets/styles/main.scss'
    ],
    modules:[
    '@nuxtjs/i18n',
    ],
    i18n: {
        locales: ['en', 'es'],  // used in URL path prefix
        defaultLocale: 'en',
        vueI18n: './i18n.config.ts'
      }
  
});
