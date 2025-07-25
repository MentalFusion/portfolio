<template>
    <section class="max-w-xl mx-auto space-y-6">
        <h1 class="text-3xl font-semibold">Contact Me</h1>
        <p class="text-gray-600">
            Have a project in mind or just want to connect? Send me a message and I'll get back to you soon.
        </p>

        <form class="space-y-4" action="https://formspree.io/f/xgvzkorv" method="POST">
            <div class="hidden">
                <label for="company">Company</label>
                <input
                    id="company"
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
                    type="text"
                    name="name"
                    class="mt-1 p-2 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                >
            </div>

            <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    class="mt-1 p-2 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                >
            </div>

            <div>
                <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    class="mt-1 p-2 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
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

    </section>
</template>

