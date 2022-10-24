import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import DetailsView from '../views/DetailsView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props:true
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    props: true
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    props: true,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    props: true,
  },
  {
    path: '/details',
    name: 'details',
    component: DetailsView,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
