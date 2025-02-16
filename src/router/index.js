import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import LeadsView from '@/views/LeadsView.vue'
import EmailCampaignsView from '@/views/EmailCampaignsView.vue'
import { authGuard, loginGuard } from './guards'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
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
      meta: {
        isAuthRequired: true
      },
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

router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    loginGuard(to, from, next)
    return
  }
  if (to.matched.some((record) => record.meta.isAuthRequired)) {
    authGuard(to, from, next)

    return
  }
  next()
})

export default router
