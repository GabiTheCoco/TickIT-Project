<script setup>

</script>


<template>
  <div class="flex items-center justify-center bg-white-900 pt-0 w-full h-[90%]">
    <div class="card px-10 xl:py-5 2xl:py-20 xl:pb-[5.3rem] 2xl:pb-[7rem] rounded-lg bg-azul-oscuro w-1/4 shadow-xl ">
      <h1 class="text-center text-5xl xl:text-3xl text-white mb-14 xl:mb-12">Registrarse</h1>
      <form class="2xl:my-6 flex flex-col justify-between gap-2" @submit.prevent="login">
        <input v-model="nombre" class="p-2 my-2 rounded w-full focus:outline-gray-800" placeholder="Nombre" type="text">
        <input v-model="email" class="p-2 my-2 rounded w-full focus:outline-gray-800" placeholder="Email" type="email">
        <input v-model="password" class="p-2 my-2 rounded w-full focus:outline-gray-800" placeholder="Contraseña" type="password">
        <button class="bg-white hover:bg-gray-200 text-gray-800 font-semibold p-2 mt-5 rounded w-full">Registrarse</button>
        <button type="button" @click="loginWithGoogle" class="bg-white hover:bg-gray-200 text-gray-800 font-semibold p-2 mt-3 rounded w-full">Registrarse con Google</button>
      </form>
    </div>
  </div>
</template>