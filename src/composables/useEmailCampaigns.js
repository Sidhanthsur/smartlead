import { computed, ref, watch } from 'vue'
import { campaigns } from '@/constants/campaigns'

const useEmailCampaigns = () => {
  const selectedCampaigns = ref([])
  const selectAllCheckbox = ref(false)
  const searchQuery = ref('')

  const filteredCampaigns = computed(() => {
    return campaigns.filter((campaign) =>
      campaign.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  })
  watch(selectAllCheckbox, (newVal) => {
    if (newVal) {
      selectedCampaigns.value = filteredCampaigns.value.map((campaign) => campaign.id)
    } else {
      if (selectedCampaigns.value.length === filteredCampaigns.value.length) {
        selectedCampaigns.value = []
      }
    }
  })

  watch(selectedCampaigns, (newVal) => {
    if (newVal.length === filteredCampaigns.value.length) {
      selectAllCheckbox.value = true
    } else {
      selectAllCheckbox.value = false
    }
  })

  watch(searchQuery, () => {
    selectAllCheckbox.value = false
    selectedCampaigns.value = []
  })
  return {
    searchQuery,
    selectAllCheckbox,
    selectedCampaigns,
    filteredCampaigns
  }
}

export default useEmailCampaigns
