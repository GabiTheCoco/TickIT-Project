<script setup>
  import {ref, defineEmits} from "vue";
  import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
  import {useRouter} from "vue-router"

  const auth = getAuth();
  const email = ref("");
  const password = ref("");
  const router = useRouter();

  const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((data) => {

        console.log(data);
        console.log(auth.currentUser) //el  usuario se guarda en el localstorage
        router.push("/");

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert("Error al crear cuenta e iniciar sesión - " + error + " - " + errorMessage);
      })
  }

  const SignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
      .then((result) => {
        console.log(result.user);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const emit = defineEmits(["cambio-estado"]);

  const cambioEstado = () => {
    emit('cambio-estado')
  }

</script>


<template>
  <div class="flex items-center justify-center bg-white-900 pt-0 w-full h-[90%]">
    <div class="flex flex-col justify-between py-10 p-8 2xl:py-16 rounded-lg bg-azul-oscuro  min-w-[24rem] 2xl:max-w-[28rem] min-h-[28rem] 2xl:max-h-[32rem] 2xl:h-5/6">
      <div class="flex relative justify-center items-center">
        <svg @click.prevent="cambioEstado" class="lucide lucide-circle-arrow-left size-8 2xl:size-9 text-white absolute left-0 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        <h1 class="text-center text-3xl 2xl:text-4xl text-white ">Registrarse</h1>
      </div>
      <form class="flex flex-col justify-center gap-5">
          <input v-model="nombre" class="p-2  rounded w-full outline-none" placeholder="Nombre" type="text">
          <input v-model="email" class="p-2  rounded w-full outline-none" placeholder="Email" type="email">
          <input v-model="password" class="p-2 rounded w-full  outline-none" placeholder="Contraseña" type="password">
      </form>
      <div class="flex justify-between gap-5">
          <button @click="register" class="bg-white hover:bg-gray-200 text-gray-800 font-semibold p-2 rounded w-full">Registrarse</button>
          <button @click="SignInWithGoogle" type="button"  class="bg-white hover:bg-gray-200 text-gray-800 font-semibold rounded px-1">
            <svg class="size-9" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
          </button>
      </div>
    </div>
  </div>
</template>