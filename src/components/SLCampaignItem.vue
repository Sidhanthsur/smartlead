<script setup>
import SLCampaignProgress from './SLCampaignProgress.vue'
defineProps(['campaign'])
</script>
<template>
  <div class="sl-campaign-item">
    <input type="checkbox" :id="campaign.id" />
    <SLCampaignProgress :progress="campaign.progress" :status="campaign.status" />
    <div>
      <div class="sl-campaign-item__title">{{ campaign.title }}</div>
    </div>
  </div>
</template>
<style scoped>
.sl-campaign-item {
  display: flex;
  align-items: center;
}

.sl-campaign-item__title {
  font-family: DM Sans;
  font-weight: 700;
  font-size: 15px;
  line-height: 19.53px;
  letter-spacing: 0%;
  color: #6e58f1;
}
</style>
