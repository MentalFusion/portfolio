<template>
    <section class="max-w-xl mx-auto space-y-6">
        <h1 class="text-3xl font-semibold">Contact Me</h1>
        <p class="text-gray-600">
            Have a project in mind or just want to connect? Send me a message and I'll get back to you soon.
        </p>

        <form class="space-y-4" @submit.prevent="handleSubmit">
            <div class="hidden">
                <label for="company">Company</label>
                <input
                    id="company"
                    v-model="form.honeypot"
                    type="text"
                    name="company"
                    autocomplete="off"
                    tabindex="-1"
                >
            </div>

            <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    class="mt-1 p-2 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                >
            </div>

            <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                >
            </div>

            <div>
                <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                    id="message"
                    v-model="form.message"
                    rows="5"
                    class="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </div>

            <button
                type="submit"
                class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
                Send Message
            </button>
        </form>

        <p v-if="submitted" class="text-green-600 mt-4">Thanks! Your message has been sent.</p>
        <p v-if="rejected" class="text-red-600 mt-4">Submission rejected as spam.</p>
    </section>
</template>

<script setup lang="ts">
    import { ref } from "vue";

    const form = ref({
        name: "",
        email: "",
        message: "",
        honeypot: "",
    });

    const submitted = ref(false);
    const rejected = ref(false);

    function handleSubmit() {
        if (form.value.honeypot) {
            console.warn("Spam bot detected. Ignoring submission.");
            rejected.value = true;
            return;
        }

        // Replace this with actual form handling logic
        console.log("Form submitted:", {
            name: form.value.name,
            email: form.value.email,
            message: form.value.message,
        });

        submitted.value = true;
        rejected.value = false;

        form.value.name = "";
        form.value.email = "";
        form.value.message = "";
    }
</script>
