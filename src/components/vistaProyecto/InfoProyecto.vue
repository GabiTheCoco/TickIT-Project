<script setup>
    import { defineProps } from 'vue';

    defineProps({
        pSelected: Object
    })


</script>

<template>
    <div class="w-4/6 h-full flex flex-col justify-between rounded-xl shadow-lg border-2">
      <figure class="h-1/5 bg-azul-hover rounded-t-xl flex flex-col justify-center px-4">
        <div class="flex justify-between align-center text-white">
          <h1 class="text-3xl font-semibold">{{ pSelected.nombre }}</h1>
          <a class="self-center cursor-pointer">Ver tickets</a>
        </div>
      </figure>
      <div class="h-4/6 px-4 flex flex-col justify-between py-4 gap-6">
        <div class="w-full h-10 flex justify-between items-center">
          <h1 class="text-2xl font-semibold">Descripcion</h1>
          <img src="https://e7.pngegg.com/pngimages/147/564/png-clipart-puma-logo-brand-adidas-sneakers-adidas-cat-like-mammal-carnivoran.png" class="h-full w-auto aspect-square" alt="imagencita xddd">
        </div>
        <p class="text-wrap text-left h-full">
          {{ pSelected.descripcion  }}
        </p>
      </div>
      <div class="h-12 w-full flex justify-between items-center px-4">
        <p>Integrantes: {{ pSelected.integrantes.length }} </p>
        <p>{{ pSelected.integrantes[0] + ", PM" }}</p>
      </div>
    </div>
</template>