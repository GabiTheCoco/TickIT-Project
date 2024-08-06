<script setup>
    import { defineProps, isReactive} from 'vue';

    const props = defineProps({
        proyecto: Object,
        isActive: String
    })

</script>

<template>
    <div @click="manejoClick" class="w-full h-1/6 flex justify-between items-center border-2 shadow-md rounded-xl px-4 box-border cursor-pointer">
        <img :src="`${proyecto.urlImagen}`" class="h-[60%] w-auto aspect-square" alt="imagencita xddd">
        <h1 class="text-xl font-semibold">{{ proyecto.nombre }}</h1>
        <p>{{ proyecto.integrantes[0] + ", PM" }}</p>
        <p>{{ console.log(isActive) }}</p>
    </div>
</template>