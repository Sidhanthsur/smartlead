import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore(
  'user',
  () => {
    const user = ref({
      email: '',
      username: ''
    })

    const isOfferVisible = ref(false)

    const setUser = (newUser) => {
      user.value = newUser
    }

    const setOfferVisible = (visible) => {
      isOfferVisible.value = visible
    }

    return { user, setUser, isOfferVisible, setOfferVisible }
  },
  {
    persist: true
  }
)
