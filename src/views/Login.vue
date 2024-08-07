<script setup>
  import SignUp from "@/components/SignUp.vue"
  import {reactive} from "vue"
  import {ref} from "vue";
  import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
  import {useRouter} from "vue-router"

  const auth = getAuth();
  const email = ref("");
  const password = ref("");
  const errorMsg = ref("olas")
  const router = useRouter();

  const SignIn = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((data) => {

        console.log(data);
        console.log(auth.currentUser) //el  usuario se guarda en el localstorage
        router.push("/");

      })
      .catch((error) => {

        switch (error.code) {
          case "auth/invalid-email":
            errorMsg.value = "Invalid Email"
            break;

          case "auth/user-not-found":
            errorMsg.value = "No account with that email was found"
            break;

          case "auth/wrong-password":
            errorMsg.value = "Incorrect Password"
            break;

          default:
            errorMsg.value = "Email or password was incorrect"
            break;
        }
        
        alert(errorMsg.value)
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

  const cambioComponente = reactive({
    estado: false
  })

  const cambioEstado = () => {
    cambioComponente.estado = true
  }

</script>


<template>

  <div v-if="!cambioComponente.estado" class="flex items-center justify-center bg-white-900 pt-0 w-full h-[90%]">
    <div class="flex flex-col justify-between py-10 p-8 2xl:py-16 rounded-lg bg-azul-oscuro  min-w-[24rem] 2xl:max-w-[30rem] min-h-[28rem] 2xl:max-h-[32rem] 2xl:h-5/6">
      <h1 class="text-center text-3xl 2xl:text-4xl text-white">Ingresar</h1>
      <form class="flex flex-col justify-center gap-10 h-5/6">
        <div class="flex flex-col justify-center gap-4">
          <input v-model="email" class="p-2  rounded w-full outline-none" placeholder="Email" type="email">
          <input v-model="password" class="p-2 rounded w-full outline-none" placeholder="Contraseña" type="password">
          <p class="text-sm text-center w-full text-white">{{ errorMsg.value }}</p>
        </div>
        <div class="flex justify-between gap-5">
          <button @click.prevent="SignIn" class="bg-white hover:bg-gray-200 text-gray-800 font-semibold p-2 rounded w-full">Iniciar sesión</button>
          <button type="button" @click="SignInWithGoogle" class="bg-white hover:bg-gray-200 text-gray-800 font-semibold rounded">
            <svg class="size-10 text-gray-800" xmlns="http://www.w3.org/2000/svg" color="currentColor" x="0px" y="0px" viewBox="0 0 30 30">
                <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"></path>
            </svg>
          </button>
        </div>
      </form>
      <div class="flex justify-between text-sm">
          <a href="#" @click.prevent="forgotPassword" class="text-gray-200 hover:underline w-2/3">¿Olvidaste tu contraseña?</a>
          <a href="#" @click="cambioEstado" class="text-gray-200 hover:underline w-1/2 text-right">Registrarse</a>
      </div>
    </div>
  </div>
  <SignUp v-else></SignUp>

</template>
