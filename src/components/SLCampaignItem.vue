<script setup>
import SLCampaignProgress from './SLCampaignProgress.vue'
import SLCampaignStatus from './SLCampaignStatus.vue'
defineProps(['campaign'])
const model = defineModel()
</script>
<template>
  <div class="sl-campaign-item">
    <input type="checkbox" :id="campaign.id" :value="campaign.id" v-model="model" />

    <SLCampaignProgress
      class="sl-campaign-item__progress"
      :progress="campaign.progress"
      :status="campaign.status"
    />

    <div class="sl-campaign-item__title-status-box">
      <div class="sl-campaign-item__title">{{ campaign.title }}</div>
      <SLCampaignStatus
        class="sl-campaign-item__status"
        :status="campaign.status"
        :count="campaign.sequences"
        :time-stamp="campaign.statusTime"
      />
    </div>
  </div>
</template>
<style scoped>
.sl-campaign-item {
  display: flex;
  align-items: center;
  background-color: white;
  margin: 0.125rem 0;
  width: 100%;
  padding: 0.75rem;
}

.sl-campaign-item__title {
  font-family: DM Sans;
  font-weight: 700;
  font-size: 15px;
  line-height: 19.53px;
  letter-spacing: 0%;
  color: #6e58f1;
}

.sl-campaign-item__title-status-box {
  margin-left: 1.25rem;
}
.sl-campaign-item__status {
  margin-top: 0.5rem;
}

.sl-campaign-item__progress {
  margin-left: 1.375rem;
}
</style>
