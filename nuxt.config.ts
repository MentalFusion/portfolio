// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    app: {
        head: {
            title: "MentalFusion - Michael's Portfolio",
            meta: [
                { name: "description", content: "Portfolio of Michael Brown - experienced full-stack engineer with a focus on TypeScript, Vue.js, Node.js, and modern web architecture." },
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                { property: "og:title", content: "MentalFusion - Michael's Portfolio" },
                { property: "og:description", content: "Portfolio of Michael Brown - experienced full-stack engineer with a focus on TypeScript, Vue.js, Node.js, and modern web architecture." },
                { property: "og:type", content: "website" },
                { property: "og:url", content: "https://mentalfusion.org" },
                { property: "og:image", content: "https://mentalfusion.org/og-image.png" },
            ],
        },
    },

    compatibilityDate: "2025-05-15",
    devtools: { enabled: true },
    nitro: {
        prerender: {
            routes: ["/", "/about", "/projects", "/contact"],
        },
    },

    modules: [
        "@nuxt/eslint",
        "@nuxt/fonts",
        "@nuxt/icon",
        "@nuxt/image",
        "@nuxt/test-utils",
        "@nuxt/ui",
    ],

    srcDir: "src",
    css: ["@/assets/css/main.css"],
    vite: {
        plugins: [tailwindcss()],
    },
});