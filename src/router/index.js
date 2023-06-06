// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
      },
      {
        path: 'tabla',
        name: 'Tabla',
        component: () => import(/* webpackChunkName: "tabla" */ '@/views/Tabla.vue'),
      },
      {
        path: 'tabladatos',
        name: 'Tabladatos',
        component: () => import(/* webpackChunkName: "tabladatos" */ '@/views/TabladeDatos.vue'),
      }
     
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
