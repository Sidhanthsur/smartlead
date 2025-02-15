import { ref } from 'vue'
import userDB from '../constants/userDB'
import { useUserStore } from '@/stores/user'
import { toast } from 'vue3-toastify'
import router from '@/router'

const useLoginPage = () => {
  const { setUser, setOfferVisible } = useUserStore()

  const email = ref('a@b.com')
  const password = ref('123456')
  const isLoading = ref(false)

  const submit = () => {
    isLoading.value = true
    const user = userDB.find((item) => item.email === email.value)
    if (user?.password !== password.value) {
      toast('Invalid credentials', { type: 'error' })
      return
    }
    setTimeout(() => {
      isLoading.value = false
      void setUser(user)
      toast('Logged in successfully', { type: 'success' })
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
