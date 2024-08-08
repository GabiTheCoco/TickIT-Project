import './assets/main.css'
// import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "567538639198",
  appId: import.meta.env.VITE_FIREBASE_APPID 
};

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')


// const app = createApp(App)

// app.use(createPinia())
// app.use(router)

// app.mount('#app')
