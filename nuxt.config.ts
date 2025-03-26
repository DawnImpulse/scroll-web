// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-27",
    future: {
        compatibilityVersion: 4,
    },
    devtools: { enabled: true },
    modules: ["@nuxt/ui-pro", "@nuxt/icon"],
    css: ["~/assets/css/main.css"],
    devServer: {
        port: 3131,
    },
});
