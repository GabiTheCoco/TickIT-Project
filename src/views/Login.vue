<script setup>
  import SignUp from "@/components/vistaLogin/SignUp.vue"
  import LogIn from "@/components/vistaLogin/LogIn.vue"
  import {reactive} from "vue"
  

  const cambioComponente = reactive({
    estado: false
  })

  const mostrarSignUp = () => {
    cambioComponente.estado = true
  }

  const mostrarLogIn = () => {
    cambioComponente.estado = false
  }
</script>


<template>

  <LogIn v-if="!cambioComponente.estado" @cambio-estado="mostrarSignUp" />
  <SignUp v-else @cambio-estado="mostrarLogIn" />

</template>
