<template>
    <section class="max-w-5xl mx-auto space-y-10">
        <h1 class="text-3xl font-semibold">Projects</h1>
        <p class="text-gray-600">
            A few things I've built or contributed to: personal tools, experiments, and work-in-progress ideas.
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
                    View Project →
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    const projects = [
        {
            name: "specify",
            description: "A developer-friendly suite of BDD tools built on Gherkin, Cucumber, and Selenium, with batteries-included step definitions / param types and support for adding your own.",
            language: "Node.js / TypeScript / Cucumber",
            url: "https://github.com/software-pirates/specify-core",
        },
        {
            name: "mmo-nomad",
            description: "A blog and resource site for MMO gamers, featuring guides, news, and community content.",
            language: "WordPress",
            url: "https://mmo-nomad.com",
        },
        {
            name: "fusion-chat",
            description: "A responsive, light-weight, and privacy-focused chat application that supports end-to-end encryption.",
            language: "Next.js / TypeScript",
            url: "https://github.com/MentalFusion/fusion-chat",
        },
        {
            name: "fusion-bb",
            description: "Lightweight bulletin board system with a focus on simplicity and performance.",
            language: "Laravel / PHP",
            url: "https://github.com/MentalFusion/fusion-bb",
        },
        {
            name: "portfolio",
            description: "This site. Built with Nuxt 3 and Vue 3, featuring Tailwind, TypeScript, and composition API.",
            language: "Vue 3 / Nuxt / TypeScript",
            url: "https://github.com/mentalfusion/portfolio",
        },
    ];
</script>
