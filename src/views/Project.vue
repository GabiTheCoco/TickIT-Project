<script setup>

  import { ref, onMounted } from 'vue';
  import Button from '@/components/Button.vue';
  import dataProyectos from "@/data/data.json"
  import CardProyecto from '@/components/vistaProyecto/CardProyecto.vue';
  import InfoProyecto from '@/components/vistaProyecto/InfoProyecto.vue';

  const proyectoSeleccionado = ref(dataProyectos[0]);
  const esActivo = ref(null);
  
  const manejoSeleccionProyecto = (proyecto) => {
    const previousProyecto = proyectoSeleccionado.value;
    proyectoSeleccionado.value = proyecto;
    
    if (previousProyecto) {
      const previousElement = document.querySelector(`[data-id="${previousProyecto.id}"]`);
      if (previousElement) {
        previousElement.classList.remove('bg-gray-100');
      }
    }

    const newElement = document.querySelector(`[data-id="${proyecto.id}"]`);
    if (newElement) {
      newElement.classList.add("bg-gray-100");
    }

  }

  onMounted(() => {
    const firstProject = document.querySelector(`[data-id="1"]`);
    if (firstProject) {
      firstProject.classList.add("bg-gray-100");
    }
  })

</script>

<template>
  <section class="min-h-[89%] p-8 flex justify-between items-center gap-10 2xl:p-12">
    <div class="w-2/5 h-full flex flex-col justify-between 2xl:w-2/4">
      <div class="h-auto flex justify-between items-center px-2">
        <h1 class="text-3xl font-semibold text-black 2xl:text-4xl">Proyectos</h1>
        <Button bg-color="bg-azul-hover" textColor="text-white" text="Crear Proyecto"/>
      </div>
      <div class="h-[85%] flex flex-col items-center justify-start gap-6 px-2 overflow-auto">
        <CardProyecto @click="manejoSeleccionProyecto(proyecto)" 
        v-for="proyecto in dataProyectos" :key="proyecto.id" :proyecto="proyecto" :esActivo="esActivo"/>
      </div>
    </div>
    <InfoProyecto :pSelected="proyectoSeleccionado"/>
  </section>
</template>

