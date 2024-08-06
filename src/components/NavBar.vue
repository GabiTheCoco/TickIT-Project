<script setup>
    import {RouterLink, useRoute} from "vue-router";
    import {reactive} from "vue";

    const estaLogeado = reactive({
        estado: false,
    })


    
</script>

<template>
    <nav class="bg-azul-oscuro min-w-full h-full">
        <div :class="`flex items-center min-w-screen ${estaLogeado.estado ? 'justify-between' : 'justify-center'} h-16 px-3 2xl:h-20 2xl:px-8`">
        <!-- Logo -->
            <RouterLink class="flex flex-shrink-0 items-center" to="/">
                <span class="text-white text-3xl font-medium lg:font-semibold 2xl:font-bold"
                >TickIT</span
                >
            </RouterLink>
            <div v-if="estaLogeado.estado" class="relative w-3/6 flex items-center justify-center">
                <input
                    placeholder="Search..."
                    class="w-full h-10 rounded-xl outline-none px-3 pr-12 2xl:text-lg "
                    name="search"
                /> 

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search size-6  absolute top-2 right-3 text-gray-500 cursor-pointer"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                <!-- <svg
                    class="size-6  absolute top-2 right-3 text-gray-500 cursor-pointer"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    class="2xl:size-10 cursor-pointer"
                    ></path>
                </svg> -->
            </div>
            <svg v-if="estaLogeado.estado" class="text-white size-8 2xl:size-10 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                <polyline points="16 17 21 12 16 7"/>
                <line x1="21" x2="9" y1="12" y2="12"/>
            </svg>
        </div>
    </nav>
</template>