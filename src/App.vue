<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Navbar from "@/components/NavBar.vue"
</script>

<template>
  <header class="flex flex-col justify-between items-center w-100 h-15">
      <Navbar></Navbar>
  </header>

  <RouterView />
</template>

