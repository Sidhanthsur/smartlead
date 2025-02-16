import { useUserStore } from '@/stores/user'

export const authGuard = async (to, from, next) => {
  const store = useUserStore()

  if (store?.user?.email) {
    next()
  } else {
    next({ name: 'login' })
  }
}

export const loginGuard = async (to, from, next) => {
  const store = useUserStore()

  if (store?.user?.email) {
    next({ name: 'dashboard' })
  } else {
    next()
  }
}
