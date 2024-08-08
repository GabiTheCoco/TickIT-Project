import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Login from '@/views/Login.vue'
import Project from '@/views/Project.vue'
import Evento from '@/views/Evento.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'proyectos',
      component: Project,
      meta: {requiresAuth: true}
    },
    {
      path: '/evento',
      name: 'evento',
      component: Evento,
      meta: {requiresAuth: true}
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {guest: true}
    }
    
  ]
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isGuestRoute = to.matched.some((record) => record.meta.guest);
  const currentUser = await getCurrentUser();

  if (requiresAuth && !currentUser) {
    next('/login');
  } else if (isGuestRoute && currentUser) {
    next('/');
  } else {
    next();
  }

});


export default router
