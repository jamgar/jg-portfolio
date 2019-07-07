import fs from 'fs'
import md from 'markdown-it'
import pkg from './package'

const files = fs.readdirSync('./content/blogs')

const getSlugs = (blog, index) => {
  const slug = blog.substr(0, blog.lastIndexOf('.'))
  console.log('slug', slug)
  return `/blogs/${slug}`
}

const getDynamicRoutes = () => {
  return files.map(getGlugs)
}

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || 'James Garcia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        hef:
          'https://fonts.googleapis.com/css?family=Raleway:300,400,700,900&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.scss', 'highlight.js/styles/hopscotch.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/moment.js'],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: [
      '~/assets/css/abstracts/_variables.scss',
      '~/assets/css/abstracts/_animations.scss'
    ]
  },
  generate: {
    routes: getDynamicRoutes
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader'
      })
    }
  }
}
