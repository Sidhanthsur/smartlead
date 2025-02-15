<script setup>
import { ref } from 'vue'
import { campaigns } from '@/constants/campaigns'
import SLCampaignItem from '@/components/SLCampaignItem.vue'
import SLSearchBar from '@/components/SLSearchBar.vue'
const filteredCampaigns = ref(campaigns)

const handleSearch = (query) => {
  filteredCampaigns.value = campaigns.filter((campaign) =>
    campaign.title.toLowerCase().includes(query.toLowerCase())
  )
}
</script>
<template>
  <div class="email-campaigns">
    <div class="email-campaigns-header">
      <span class="email-campaigns__header-title"
        >All Campaigns ({{ filteredCampaigns.length }})</span
      >
      <div>
        <SLSearchBar @search="handleSearch" />
      </div>
    </div>
    <SLCampaignItem v-for="campaign in filteredCampaigns" :key="campaign.id" :campaign="campaign" />
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
</style>
