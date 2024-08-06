<script setup>

</script>


<template>
  <div class="flex items-center justify-center min-h-screen bg-white-900 pt-0 w-full">
    <div class="card px-10 py-20 rounded-lg bg-azul-oscuro w-1/4 shadow-xl -mt-16">
      <h1 class="text-center text-5xl text-white mb-14">Registrarse</h1>
      <form class="my-6 flex flex-col justify-between gap-4" @submit.prevent="login">
        <input v-model="email" class="p-2 my-2 rounded w-full focus:outline-gray-800" placeholder="Nombre" type="email">
        <input v-model="email" class="p-2 my-2 rounded w-full focus:outline-gray-800" placeholder="Email" type="email">
        <input v-model="password" class="p-2 my-2 rounded w-full focus:outline-gray-800" placeholder="Contraseña" type="password">
        <button class="bg-white hover:bg-gray-200 text-gray-800 font-semibold p-2 mt-5 rounded w-full">Registrarse</button>
        <button type="button" @click="loginWithGoogle" class="bg-white hover:bg-gray-200 text-gray-800 font-semibold p-2 mt-3 rounded w-full">Registrarse con Google</button>
      </form>
    </div>
  </div>
</template>