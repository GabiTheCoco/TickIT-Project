<script setup>
 import SignUp from "@/components/SignUp.vue"
 import {reactive} from "vue"
  const cambioComponente = reactive({
    estado: false
  })

const cambioEstado = () => {
  cambioComponente.estado = true
}
</script>


<template>
  <div v-if="!cambioComponente.estado" class="flex items-center justify-center min-h-screen bg-white-900 pt-0 w-full">
    <div class="card px-10 py-20 rounded-lg bg-azul-oscuro w-1/4 shadow-xl -mt-16">
      <h1 class="text-center text-5xl text-white mb-14">Ingresar</h1>
      <form class="my-6 flex flex-col justify-between gap-2" @submit.prevent="login">
        <input v-model="email" class="p-2 my-2 rounded w-full focus:outline-gray-800" placeholder="Email" type="email">
        <input v-model="password" class="p-2 my-2 rounded w-full focus:outline-gray-800" placeholder="Contraseña" type="password">
        <button class="bg-white hover:bg-gray-200 text-gray-800 font-semibold p-2 mt-5 rounded w-full">Iniciar sesión</button>
        <button type="button" @click="loginWithGoogle" class="bg-white hover:bg-gray-200 text-gray-800 font-semibold p-2 mt-3 rounded w-full">Iniciar sesión con Google</button>
        <div class="flex justify-between my-6">
          <a href="#" @click.prevent="forgotPassword" class="text-gray-200 hover:underline mt-4">¿Olvidaste tu contraseña?</a>
          <a href="#" @click="cambioEstado" class="text-gray-200 hover:underline mt-4">Registrarse</a>
        </div>
      </form>
    </div>
  </div>
  <SignUp v-else></SignUp>

</template>
