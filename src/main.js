import './assets/main.css'
// import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAejdBwAjlOy-psd2GZBkMYyUIm5SBfeeU",
  authDomain: "vueauthproject-7f838.firebaseapp.com",
  projectId: "vueauthproject-7f838",
  storageBucket: "vueauthproject-7f838.appspot.com",
  messagingSenderId: "567538639198",
  appId: "1:567538639198:web:4aa2318a9928c719c9efcf"
};

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')


// const app = createApp(App)

// app.use(createPinia())
// app.use(router)

// app.mount('#app')
