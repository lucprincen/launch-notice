module.exports = {
  /*
  ** Headers of the page
  */
    head: {
        title: 'Launch Notice',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Notices you when rocket launches happen' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Exo:400,900' }
        ]
    },
    
    /*
    ** Customize the progress bar color
    */
    loading: { color: '#3B8070' },

    css: [
        { src: '~assets/css/main.scss', lang: 'scss' },
    ],

    modules: [
        '@nuxtjs/axios',
    ],

    plugins: ['~/plugins/vue-youtube'],

    axios: {
    // proxyHeaders: false
    },

    router: {
        middleware: ['index-redirect']
    },

    /*
    ** Build configuration
    */
    build: {
        /*
        ** Run ESLint on save
        */
        extend (config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /(node_modules)/
                })
            }
        }
    }
}
