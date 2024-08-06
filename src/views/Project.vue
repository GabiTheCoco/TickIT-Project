<script setup>
  import { ref } from 'vue';
  import Button from '@/components/Button.vue';
  import dataProyectos from "@/data/data.json"
  import CardProyecto from '@/components/vistaProyecto/CardProyecto.vue';
  import InfoProyecto from '@/components/vistaProyecto/InfoProyecto.vue';

  const proyectoSeleccionado = ref(dataProyectos[0]);
  
  const manejoSeleccionProyecto = (p) => {
    proyectoSeleccionado.value = p;
  }

</script>

<template>
  <section class="min-h-[89%] p-8 flex justify-between items-center gap-10">
    <div class="w-2/5 h-full flex flex-col justify-between">
      <div class="h-auto flex justify-between items-center px-2">
        <h1 class="text-3xl font-semibold text-black">Proyectos</h1>
        <Button bg-color="bg-azul-hover" textColor="text-white" text="Crear Proyecto"/>
      </div>
      <div class="h-[85%] flex flex-col items-center justify-start gap-6 px-2 overflow-auto">
        <CardProyecto @click="manejoSeleccionProyecto(proyecto)" 
        v-for="proyecto in dataProyectos" :key="proyecto.id" :proyecto="proyecto"/>
      </div>
    </div>
    <InfoProyecto :pSelected="proyectoSeleccionado"/>
  </section>
</template>

