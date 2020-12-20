import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../pages/Home.vue'
import Team from "../pages/Team.vue";

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/team',
    component: Team
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
