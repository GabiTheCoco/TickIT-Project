<script setup>
    import {RouterLink, useRoute} from "vue-router";
    import {reactive} from "vue";

    const estaLogeado = reactive({
        estado: false,
    })


    
</script>

<template>
    <nav class="bg-azul-oscuro min-w-full">
        <div :class="`flex items-center min-w-screen ${estaLogeado.estado ? 'justify-between' : 'justify-center'} p-5`">
        <!-- Logo -->
            <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
                <span class="hidden md:block text-white text-3xl font-bold ml-2"
                >TickIT</span
                >
            </RouterLink>
            <div v-if="estaLogeado.estado" class="relative w-3/6 flex items-center justify-center">
                <input
                    placeholder="Search..."
                    class="input w-full h-full px-5 py-2 rounded-xl outline-none "
                    name="search"
                    type="search"
                />  
                <svg
                    class="size-6 absolute top-2 right-3 text-gray-500 cursor-pointer"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    ></path>
                </svg>
            </div>

            <button v-if="estaLogeado.estado" class="relative overflow-hidden bg-white text-gray-800 font-medium px-5 py-2 rounded-xl">
                Login
                <span
                    class="absolute inset-0 bg-gray-100 rounded-lg opacity-0 hover:opacity-10 transition-opacity duration-100 ease-linear"
                ></span>
            </button>
        </div>
    </nav>
</template>