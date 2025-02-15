import { useUserStore } from '@/stores/user'

// checks if users authenticated or not for protected routes
export const authGuard = async (to, from, next) => {
  const store = useUserStore()

  // Check if the user is authenticated
  if (store?.user?.email) {
    next()
  } else {
    next({ name: 'login' })
  }
}

export const loginGuard = async (to, from, next) => {
  const store = useUserStore()

  // Check if the user is authenticated
  if (store?.user?.email) {
    next({ name: 'dashboard' })
  } else {
    next()
  }
}
