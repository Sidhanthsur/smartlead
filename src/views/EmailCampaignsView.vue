<script setup>
import SLCampaignItem from '@/components/SLCampaignItem.vue'
import SLSearchBar from '@/components/SLSearchBar.vue'
import SLButton from '@/components/SLButton.vue'
import useEmailCampaigns from '@/composables/useEmailCampaigns'
import noResultJSON from '@/assets/no-result.json'
import { LottieAnimation } from 'lottie-web-vue'
const { searchQuery, selectAllCheckbox, selectedCampaigns, filteredCampaigns } = useEmailCampaigns()
</script>
<template>
  <div class="email-campaigns">
    <div class="email-campaigns-header">
      <span class="email-campaigns__header-title"
        >All Campaigns ({{ filteredCampaigns.length }})</span
      >
      <div class="flex items-center">
        <SLSearchBar v-model="searchQuery" />
        <SLButton class="email-campaigns__header-button" label="+ Add Campaign" />
      </div>
    </div>
    <div v-if="filteredCampaigns.length" class="email-campaigns__table">
      <div class="email-campaigns__table-header">
        <input type="checkbox" :disabled="!filteredCampaigns.length" v-model="selectAllCheckbox" />
        <div class="email-campaigns__table-header-title">Campaign Details</div>
        <div class="email-campaigns__table-header-title email-campaigns__table-header--report">
          Report
        </div>
      </div>
      <div class="email-campaigns__table-body">
        <SLCampaignItem
          v-model="selectedCampaigns"
          v-for="campaign in filteredCampaigns"
          :key="campaign.id"
          :campaign="campaign"
        />
      </div>
    </div>
    <div class="email-campaigns__no-results" v-else>
      <LottieAnimation
        :animation-data="noResultJSON"
        :auto-play="true"
        :loop="true"
        :speed="1"
        ref="anim"
      />
      <h3>No results that match your search !</h3>
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
  margin-left: 1.875rem;
}
.email-campaigns__table-body {
  max-height: 34rem;
  overflow: scroll;
}
.email-campaigns__no-results {
  max-width: 20rem;
  max-height: 20rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
