// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        '@fortawesome/fontawesome-free/css/all.min.css'
    ],
    modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth'],
    auth: {
        origin: process.env.NETLIFY
          ? process.env.CONTEXT === 'production'
            ? process.env.URL
            : process.env.CONTEXT === 'dev'
              ? 'http://localhost:8888'
              : process.env.DEPLOY_PRIME_URL
          : process.env.ORIGIN,
    }
})
