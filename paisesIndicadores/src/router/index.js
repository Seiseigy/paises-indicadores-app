import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../pages/Home.vue';
import Team from '../pages/Team.vue';
import IndicatorSelector from '../pages/IndicatorSelector.vue';

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
  },
  {
    path: '/indicator-selector',
    component: IndicatorSelector
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
