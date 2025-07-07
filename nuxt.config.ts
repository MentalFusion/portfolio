// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    devtools: { enabled: true },

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