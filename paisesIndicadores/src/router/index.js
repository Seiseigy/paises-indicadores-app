import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../pages/Home.vue';
import Team from '../pages/Team.vue';
import IndicatorSelector from '../pages/IndicatorSelector.vue';
import IndicatorsChart from "../pages/IndicatorsChart.vue";

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
    name: 'Team',
    component: Team
  },
  {
    path: '/indicator-selector',
    name: 'IndicatorSelector',
    component: IndicatorSelector
  },
  {
    path: '/indicators-chart',
    name: 'IndicatorsChart',
    component: IndicatorsChart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
