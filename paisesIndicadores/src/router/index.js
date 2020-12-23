import { createRouter, createWebHistory } from '@ionic/vue-router';
import Team from '../pages/Team.vue';
import IndicatorSelector from '../pages/IndicatorSelector.vue';
import IndicatorsChart from "../pages/IndicatorsChart.vue";
import SplashScreen from '../pages/SplashScreen.vue';

const routes = [
  {
    path: '/',
    redirect: '/splash'
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
  },
  {
    path: '/splash',
    name: 'SplashScreen',
    component: SplashScreen
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
