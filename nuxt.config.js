export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',

  components: ['~/components'],
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      lang: 'ja',
    },
    title:
      '株式会社 chatboxはWebのこれからを語り合う会社です。| 株式会社 chatbox(チャットボックス)' ||
      '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, minimum-scale=1, initial-scale=1',
      },
      {
        name: 'description',
        content:
          '株式会社chatboxは大阪堺筋本町の小さなWeb制作会社です。Web制作や技術顧問、イベント運営など、最新のWeb製作技術を活かした様々な活動を行っています。',
      },
      {
        name: 'keyword',
        content:
          '大阪,Web制作,技術顧問,イベント,PHP,フロントエンド,株式会社chatbox,チャットボックス',
      },
      {
        property: 'og:title',
        content:
          '株式会社 chatboxはWebのこれからを語り合う会社です。| 株式会社 chatbox(チャットボックス)',
      },
      {
        property: 'og:image',
        content: 'https://chatbox-inc.com/image/ogp.jpg',
      },
      { property: 'og:url', content: 'https://chatbox-inc.com/' },
      {
        property: 'og:description',
        content:
          '株式会社chatboxは大阪堺筋本町の小さなWeb制作会社です。Web制作や技術顧問、イベント運営など、最新のWeb製作技術を活かした様々な活動を行っています。',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@chatbox_inc' },
      { name: 'twitter:creator', content: '@chatbox_inc' },
      {
        name: 'twitter:title',
        content:
          '株式会社chatboxは大阪堺筋本町の小さなWeb制作会社です。Web制作や技術顧問、イベント運営など、最新のWeb製作技術を活かした様々な活動を行っています。',
      },
      {
        name: 'twitter:description',
        content:
          '株式会社chatboxは大阪堺筋本町の小さなWeb制作会社です。Web制作や技術顧問、イベント運営など、最新のWeb製作技術を活かした様々な活動を行っています。',
      },
      {
        name: 'twitter:image',
        content: 'https://chatbox-inc.com/image/ogp.jpg',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['@/plugins/vuelidate'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  /*
   ** Nuxt.js dev-modules
   */
  devDependencies: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/components',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/dotenv', '@nuxtjs/dayjs'],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  dayjs: {
    locals: ['ja'],
    defaulocale: 'ja',
  },

  build: {},
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.scss',
  },
}
