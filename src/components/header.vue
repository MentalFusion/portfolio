<template>
    <header class="bg-gray-800 text-white p-4">
        <nav class="container mx-auto flex justify-between items-center">
            <NuxtLink to="/" class="text-lg font-bold">My Portfolio</NuxtLink>
            <ul class="flex space-x-4">
                <li><NuxtLink to="/" class="hover:text-gray-300">Home</NuxtLink></li>
                <li><NuxtLink to="/about" class="hover:text-gray-300">About</NuxtLink></li>
                <li><NuxtLink to="/projects" class="hover:text-gray-300">Projects</NuxtLink></li>
                <li><NuxtLink to="/contact" class="hover:text-gray-300">Contact</NuxtLink></li>
            </ul>
        </nav>
    </header>
</template>