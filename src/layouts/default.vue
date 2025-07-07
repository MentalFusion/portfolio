<template>
    <div class="min-h-screen flex flex-col">
        <Header />

        <main class="flex-1 container mx-auto px-6 py-10">
            <slot />
        </main>

        <Footer />
    </div>
</template>

<script lang="ts" setup>
    import Header from "../components/header.vue";
    import Footer from "../components/footer.vue";
</script>