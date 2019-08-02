require("dotenv").config();

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: "en"
    },
    title: "Jeff Hilman | Audio Engineer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Jeff Hilman Audio Engineer"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Lato:400,700,900|Prata&display=swap"
      }
    ]
  },
  env: {
    baseUrl: process.env.BASE_URL,
    projectsUrl: process.env.PROJECTS_URL,
    socialUrl: process.env.SOCIAL_URL,
    homeUrl: process.env.HOME_URL,
    aboutUrl: process.env.ABOUT_URL,
    projectPageUrl: process.env.PROJECT_PAGE_URL,
    demoUrl: process.env.DEMO_URL
  },
  modules: ["@nuxtjs/axios", "@nuxtjs/sitemap"],
  router: {
    middleware: "pages"
  },
  plugins: [
    { src: "~/plugins/resize", ssr: false },
    { src: "~/plugins/reduced-motion", ssr: false }
  ],
  /*
   ** Customize the progress bar color
   */
  loading: false,
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
