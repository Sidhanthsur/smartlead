import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
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
      path: '/dashboard',
      component: () => import('@/views/DashboardView.vue'),
      meta: {
        isAuthRequired: true
      },
      children: [
        {
          path: '',
          component: () => import('@/views/LeadsView.vue'),
          name: 'dashboard'
        },
        {
          path: 'emails',
          component: () => import('@/views/EmailCampaignsView.vue'),
          name: 'emails'
        }
      ]
    },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('@/views/PageNotFoundView.vue') }
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
