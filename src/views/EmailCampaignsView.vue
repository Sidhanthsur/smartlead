<script setup>
import { campaigns } from '@/constants/campaigns'
import SLCampaignItem from '@/components/SLCampaignItem.vue'
</script>
<template>
  <div>
    <SLCampaignItem v-for="campaign in campaigns" :key="campaign.id" :campaign="campaign" />
  </div>
</template>
