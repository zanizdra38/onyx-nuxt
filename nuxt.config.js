
module.exports = {

  telemetry: false,

  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
//    title: process.env.npm_package_nameNew || '',
    title: 'SCC',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    '@/assets/css/index.css',
    '@/assets/css/admin.css',
  ],
  plugins: [
    '@/plugins/globals'
  ],
  buildModules: [
  ],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    "vue2-editor/nuxt",
    'bootstrap-vue/nuxt',
    ['nuxt-modernizr',{
      'feature-detects': ['css/scrollbars', 'css/overflow-scrolling'],
        options: ['setClasses'],
    }],
    ['nuxt-i18n', { detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        alwaysRedirect: false,
        fallbackLocale: 'en',
        redirectOn: 'root',
      },
      locales: [
        {
          name: 'Ukrainian',
          code: 'ua',
          iso: 'uk-UA',
          file: 'uk-UA.js'
        },
        {
          name: 'Russian',
          code: 'ru',
          iso: 'ru-RU',
          file: 'ru-RU.js'
        },
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
          file: 'en-US.js'
        },
      ],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'ua',
    },
      'nuxt-fontawesome', {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set:'@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ]}
    ],
  ],
  axios: {
  },
  build: {
    transpile: [/^element-ui/],
    extend (config, ctx) {
    }
  }
};
