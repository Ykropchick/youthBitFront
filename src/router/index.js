import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import LogInView from "@/views/LogInView.vue";
import ModulesView from "@/views/ModulesView.vue";
import NotificationsView from "@/views/NotificationsView.vue";
import NotificationView from "@/views/NotificationView.vue";
import ManualView from "@/views/ManualView.vue";
import NoobsView from "@/views/NoobsView.vue";
import PersonalAccountView from "@/views/PersonalAccountView.vue";


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
  {
    path: '/modules/:id/:manualId',
    name: 'manual',
    component: ManualView
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: NotificationsView
  },
  {
    path: '/notifications/:id',
    name: 'notification',
    component: NotificationView
  },
  {
    path: '/noobs',
    name: 'noobs',
    component: NoobsView
  },
  {
    path: '/personal-account',
    name: 'personal-account',
    component: PersonalAccountView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
