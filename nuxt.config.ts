// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                {
                    rel: "icon",
                    type: "image/png",
                    href: "/favicon-96x96.png",
                    sizes: "96x96",
                },
                { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
                { rel: "shortcut icon", href: "/favicon.ico" },
                {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/apple-touch-icon.png",
                },
                { rel: "manifest", href: "/site.webmanifest" },
            ],
            meta: [{ name: "apple-mobile-web-app-title", content: "Scroll" }],
        },
    },
    ssr: false,
    compatibilityDate: "2024-11-27",
    future: {
        compatibilityVersion: 4,
    },
    devtools: { enabled: true },
    modules: ["@nuxt/ui", "@nuxt/icon", "nuxt-vuefire"],
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
