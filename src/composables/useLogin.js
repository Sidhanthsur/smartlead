import { ref } from 'vue'
import userDB from '../constants/userDB'
import { useUserStore } from '@/stores/user'
import { useToast } from 'vue-toastification'

import router from '@/router'

const useLoginPage = () => {
  const { setUser, setOfferVisible } = useUserStore()
  const toast = useToast()

  const email = ref('a@b.com')
  const password = ref('123456')
  const isLoading = ref(false)

  const submit = () => {
    isLoading.value = true
    const user = userDB.find((item) => item.email === email.value)
    if (user?.password !== password.value) {
      toast.error('Invalid credentials', { timeout: 2000 })
      isLoading.value = false
      return
    }
    setTimeout(() => {
      isLoading.value = false
      void setUser(user)
      toast.success(`Welcome back ${user.username}`, { timeout: 2000 })
      void setOfferVisible(true)
      router.push({ name: 'dashboard' })
    }, 1000)
  }

  return {
    email,
    password,
    submit,
    isLoading
  }
}

export default useLoginPage
