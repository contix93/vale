// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    components : {
        global : true,
        dirs : [
            {
                path : '~/components/body'
            },
            {
                path : '~/components/system'
            }
        ]
    },
    app: {
        head : {
            link: [
                // {
                //     rel:"preconnect",
                //     href:"https://fonts.googleapis.com"
                // },
                // {
                //     rel:"preconnect",
                //     href:"https://fonts.gstatic.com",
                //     crossorigin:true
                // },
                // { 
                //     rel: 'preload', 
                //     href: "https://use.typekit.net/wgf0mnq.css",
                //     type : 'text/css',
                //     as : 'style',
                //     onload : "this.onload=null;this.rel='stylesheet';"
                // },
                // {
                //     rel: 'preload', 
                //     href:"https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700&display=swap",
                //     type : 'text/css',
                //     as : 'style',
                //     onload : "this.onload=null;this.rel='stylesheet';"
                // }
            ],
            script : [
                {
                    type: 'module',
                    src: 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js'
                }
            ]
        }
    },
    runtimeConfig: {
        env: process.env.ENVIROMENT, 
        api: {
            baseUrl: process.env.API_BASE_URL
        },
        public: {
            env: process.env.ENVIROMENT, 
            storyblokVersion: process.env.STORYBLOK_API_VERSION,
            defaultLanguage: 'it',
            STORYBLOK_KEY: process.env.STORYBLOK_API_KEY,
            baseUrl: process.env.API_BASE_URL
        }
    },
    css: [,"@/assets/scss/main.scss", '@/node_modules/remixicon/fonts/remixicon.css'],
    vite: {
        optimizeDeps: { 
            exclude: ["fsevents"]
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/vars.scss";\n',
                },
            },
        },
    },
    modules: [
        [
            '@storyblok/nuxt', { 
                accessToken: process.env.STORYBLOK_API_KEY
            }
        ],
        // "@nuxtjs/robots",
        // 'nuxt-simple-sitemap' //https://nuxt.com/modules/simple-sitemap
    ],
})
