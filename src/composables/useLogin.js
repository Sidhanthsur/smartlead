import { ref } from 'vue'
import userDB from '../constants/userDB'
import { useUserStore } from '@/stores/user'
import { toast } from 'vue3-toastify'

const useLoginPage = () => {
  const { setUser } = useUserStore()

  const email = ref('a@b.com')
  const password = ref('123456')

  const submit = () => {
    const user = userDB.find((item) => item.email === email.value)
    if (user?.password !== password.value) {
      toast('Invalid credentials', { type: 'error' })
      console.log('ss')
      return
    }

    void setUser(user)
  }

  return {
    email,
    password,
    submit
  }
}

export default useLoginPage
