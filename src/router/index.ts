import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const LandingPage = () => import('../pages/LandingPage.vue');
const AuthenticationPage = () => import('../pages/AuthenticationPage.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'landingPage',
    component: LandingPage
  },
  {
    path: '/auth',
    name: 'authenticationPage',
    component: AuthenticationPage
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
