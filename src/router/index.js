import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import LeadsView from '@/views/LeadsView.vue'
import EmailCampaignsView from '@/views/EmailCampaignsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/dashboard',
      component: DashboardView,
      children: [
        {
          path: '',
          component: LeadsView,
          name: 'dashboard'
        },
        {
          path: 'emails',
          component: EmailCampaignsView,
          name: 'emails'
        }
      ]
    }
  ]
})

export default router
