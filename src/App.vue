<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Navbar from "@/components/NavBar.vue"
</script>

<template>
  <header class="flex flex-col justify-between items-center w-full h-20">
      <Navbar></Navbar>
  </header>

  <RouterView />
</template>

