// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  /*app:{
    baseURL: process.env.BASE_URL || "http://localhost:3000/"
  },*/
  css:[
    "@/assets/css/style.css"
  ],
  modules: [
    '@ant-design-vue/nuxt'
  ],
})
