<template>
    <section class="max-w-5xl mx-auto space-y-10">
        <h1 class="text-3xl font-semibold">Projects</h1>
        <p class="text-gray-600">
            A few things I've built or contributed to — personal tools, experiments, and work-in-progress ideas.
        </p>

        <div class="grid gap-8 sm:grid-cols-2">
            <div
                v-for="project in projects"
                :key="project.name"
                class="rounded-lg border border-gray-200 shadow-sm p-6 hover:shadow-md transition"
            >
                <h2 class="text-xl font-semibold mb-1">{{ project.name }}</h2>
                <p class="text-gray-600 text-sm mb-3">{{ project.description }}</p>
                <div class="text-sm text-gray-500 mb-2">
                    <span v-if="project.language">Built with {{ project.language }}</span>
                </div>
                <NuxtLink
                    :to="project.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-600 hover:underline text-sm"
                >
                    View on GitHub →
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    const projects = [
        {
            name: "runner-config-generator",
            description: "A type-safe configuration tool inspired by an internal automation runner. Built with TypeScript.",
            language: "TypeScript",
            url: "https://github.com/mentalfusion/runner-config-generator",
        },
        {
            name: "coffeepot",
            description: "Simple test project to expose a \"coffee pot\" endpoint for HTTP 418. Mostly for fun.",
            language: "Go",
            url: "https://github.com/mentalfusion/coffeepot",
        },
        {
            name: "rust-llama-playground",
            description: "A tiny Rust playground for testing LLaMA-style inference libraries and tokenizers.",
            language: "Rust",
            url: "https://github.com/mentalfusion/rust-llama-playground",
        },
        {
            name: "portfolio-site",
            description: "This site. Built with Nuxt 3 and Vue 3, featuring Tailwind and composition API.",
            language: "Vue 3 / Nuxt",
            url: "https://github.com/mentalfusion/portfolio",
        },
    ];
</script>
