<script setup>
    import { defineProps, isReactive} from 'vue';


    const props = defineProps({
        proyecto: Object,
        esActivo: Boolean
    })

</script>

<template>
    <div @click="manejoClick" class="w-full h-1/6  flex justify-between items-center border-2 shadow-md rounded-xl px-4 2xl:px-8 box-border cursor-pointer" :data-id="`${proyecto.id}`">
        <img :src="`${proyecto.urlImagen}`" class="h-[60%] w-auto aspect-square" alt="imagencita xddd">
        <h1 class="text-xl font-semibold 2xl:text-3xl  2xl:font-medium">{{ proyecto.nombre }}</h1>
        <p class="text-xl">{{ proyecto.integrantes[0] + ", PM" }}</p>
        <!-- <p>{{ console.log(esActivo) }}</p> -->
    </div>
</template>