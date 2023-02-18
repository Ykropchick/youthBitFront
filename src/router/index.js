import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import LogInView from "@/views/LogInView.vue";
import ModulesView from "@/views/ModulesView.vue";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/log-in',
    name: 'login',
    component: LogInView
  },
  {
    path: '/modules/:id',
    name: 'modules',
    component: ModulesView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
