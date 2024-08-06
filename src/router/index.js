import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Project from '@/views/Project.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/proyectos',
      name: 'proyectos',
      component: Project
    }
  ]
})

export default router
