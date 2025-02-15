<script setup>
import SLCampaignProgress from './SLCampaignProgress.vue'
defineProps(['campaign'])
</script>
<template>
  <div class="sl-campaign-item">
    <input type="checkbox" :id="campaign.id" />
    <SLCampaignProgress :progress="campaign.progress" :status="campaign.status" />
    <div>
      <div>{{ campaign.title }}</div>
    </div>
  </div>
</template>
<style scoped>
.sl-campaign-item {
  display: flex;
  align-items: center;
}
</style>
