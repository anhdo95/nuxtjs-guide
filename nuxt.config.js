require('dotenv').config()

console.log('process.env.BASE_URL', process.env.BASE_URL)

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'News feed blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ab218a', height: '5px', continuos: true, rtl: true },
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/core-components.js',
    '@/plugins/context-injection.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: process.env.BASE_URL
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  env: {
    baseUrl: process.env.BASE_URL,
    firebaseAPIKey: process.env.FIREBASE_API_KEY,
    firebaseSignInAPI: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_API_KEY}`,
    firebaseSignUpAPI: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.FIREBASE_API_KEY}`,
  },
  router: {
    // extendRoutes(routes, resolve) {
    //   routes.push({
    //     path: '*',
    //     component: resolve(__dirname, 'pages/index.vue')
    //   })
    // },
    // linkActiveClass: 'activating-route'
  },
  transition: {
    name: 'fade',
    mode: 'out-in',
  },
  router: {
    middleware: 'log'
  }
}
