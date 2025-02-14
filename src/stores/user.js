import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref({
    email: '',
    username: '',
  })

  const setUser = (newUser) => {
    user.value = newUser
  }
  return { user, setUser }
})
