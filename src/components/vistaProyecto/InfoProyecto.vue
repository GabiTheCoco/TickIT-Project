<script setup>
    import { defineProps } from 'vue';

    defineProps({
        pSelected: Object
    })


</script>

<template>
    <div class="w-4/6 h-full flex flex-col justify-between rounded-xl shadow-lg border-2">
      <figure class="h-1/5 bg-azul-hover rounded-t-xl flex flex-col justify-center px-4 2xl:px-8 desc">
        <div class="flex justify-between align-center text-white">
          <h1 class="text-3xl font-semibold 2xl:text-4xl 2xl:font-medium">{{ pSelected.nombre }}</h1>
          <a class="self-center cursor-pointer 2xl:text-lg">Ver tickets</a>
        </div>
      </figure>
      <div class="h-5/6 px-4 2xl:px-8 flex flex-col justify-between py-4 2xl:py-8 gap-6">
        <div class="w-full h-10 flex justify-between items-center 2xl:h-16">
          <h1 class="text-2xl font-semibold 2xl:text-3xl 2xl:font-normal">Descripcion</h1>
          <img src="https://e7.pngegg.com/pngimages/147/564/png-clipart-puma-logo-brand-adidas-sneakers-adidas-cat-like-mammal-carnivoran.png" class="h-full w-auto aspect-square" alt="imagencita xddd">
        </div>
        <div class="h-full flex flex-col justify-center 2xl:text-lg">
          <p class="text-wrap text-left ">
            {{ pSelected.descripcion  }}
          </p>
        </div>
        <div class="h-12 w-full flex justify-between items-center 2xl:h-12 2xl:text-lg">
          <p>Integrantes: {{ pSelected.integrantes.length }} </p>
          <p>{{ pSelected.integrantes[0] + ", PM" }}</p>
        </div>
      </div>
      
    </div>
</template>


<style scoped>

</style>