// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    compatibilityDate: "2024-11-27",
    future: {
        compatibilityVersion: 4,
    },
    devtools: { enabled: true },
    modules: ["@nuxt/ui-pro", "@nuxt/icon", "nuxt-vuefire"],
    css: ["~/assets/css/main.css"],
    devServer: {
        port: 3131,
    },
    vuefire: {
        auth: {
            enabled: true,
        },
        config: {
            apiKey: "AIzaSyBzRB8qX_QAI0D2DeCiPMH0E5UB5G6A_fg",
            authDomain: "scroll-contacts.firebaseapp.com",
            projectId: "scroll-contacts",
            storageBucket: "scroll-contacts.firebasestorage.app",
            messagingSenderId: "908465068358",
            appId: "1:908465068358:web:049871a2c6081f4af2ed47",
            databaseURL:
                "https://scroll-contacts-default-rtdb.europe-west1.firebasedatabase.app/",
        },
    },
});
