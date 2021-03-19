export default {
  ssr: false,

  server: {
    host: '0.0.0.0',
  },

  head: {
    title: 'VueContact',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
    ],
  },

  css: ['~/assets/scss/main.scss'],

  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/style-resources', '@nuxtjs/eslint-module'],

  styleResources: {
    scss: './assets/scss/*.scss',
  },

  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: 'https://jsonplaceholder.typicode.com',
  },

  build: {},
}
