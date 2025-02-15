<script setup>
import { computed, ref, watch, watchEffect } from 'vue'
import { campaigns } from '@/constants/campaigns'
import SLCampaignItem from '@/components/SLCampaignItem.vue'
import SLSearchBar from '@/components/SLSearchBar.vue'
import SLButton from '@/components/SLButton.vue'

const selectedCampaigns = ref([])
const selectAllCheckbox = ref(false)
const searchQuery = ref('')

const filteredCampaigns = computed(() => {
  return campaigns.filter((campaign) =>
    campaign.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

watchEffect(() => {
  if (selectAllCheckbox.value) {
    selectedCampaigns.value = filteredCampaigns.value.map((campaign) => campaign.id)
  } else {
    if (selectedCampaigns.value.length === filteredCampaigns.value.length) {
      selectedCampaigns.value = []
    }
  }
})

watch(selectedCampaigns, (newVal) => {
  if (newVal.length === filteredCampaigns.value.length && newVal.length) {
    selectAllCheckbox.value = true
  } else {
    selectAllCheckbox.value = false
  }
})

watch(searchQuery, () => {
  selectAllCheckbox.value = false
  selectedCampaigns.value = []
})
</script>
<template>
  <div class="email-campaigns">
    <div class="email-campaigns-header">
      <span class="email-campaigns__header-title"
        >All Campaigns ({{ filteredCampaigns.length }})</span
      >
      <div class="flex items-center">
        <SLSearchBar v-model="searchQuery" />
        <SLButton c class="email-campaigns__header-button margin-left-2" label="+ Add Campaign" />
      </div>
    </div>
    <div class="email-campaigns__table">
      <div class="email-campaigns__table-header">
        <input type="checkbox" v-model="selectAllCheckbox" />
        <div class="email-campaigns__table-header-title">Campaign Details</div>
        <div class="email-campaigns__table-header-title email-campaigns__table-header--report">
          Report
        </div>
      </div>
      <SLCampaignItem
        v-model="selectedCampaigns"
        v-for="campaign in filteredCampaigns"
        :key="campaign.id"
        :campaign="campaign"
      />
    </div>
  </div>
</template>
<style scoped>
.email-campaigns {
  width: 100%;
  flex: 1;
}
.email-campaigns-header {
  height: 3.75rem;
  background: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
}

.email-campaigns__header-title {
  font-family: DM Sans;
  font-weight: 500;
  font-size: 16px;
  line-height: 20.83px;
  letter-spacing: 0%;
  color: #282b42;
}

.email-campaigns__table-header {
  background: #e9ebf9;
  height: 3.125rem;
  display: flex;
  align-items: center;
  font-family: DM Sans;
  font-weight: 700;
  font-size: 16px;
  line-height: 20.83px;
  letter-spacing: 0%;
  color: #686b8a;
  padding: 0.75rem;
}

.email-campaigns__table-header-title {
  margin-left: 1.375rem;
  width: 20rem;
}

.email-campaigns__table {
  width: 100%;
  padding: 1.25rem;
}
.email-campaigns__table-header--report {
  margin-left: 4rem;
}
.email-campaigns__header-button {
  height: 2.25rem;
}
</style>
