<script setup>
import SLCampaignProgress from './SLCampaignProgress.vue'
import SLCampaignStatus from './SLCampaignStatus.vue'
import SLCampaignMetric from './SLCampaignMetric.vue'
import button1SVG from '@/assets/button1.svg'
import button2SVG from '@/assets/button2.svg'
import button3SVG from '@/assets/button3.svg'

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

    <div class="flex">
      <template v-for="(metric, key) in campaign.metrics" :key="key">
        <SLCampaignMetric
          :value="metric.count"
          label="sent"
          :type="key"
          :percentage="metric.percentage"
          :color="metric.color"
          :status="campaign.status"
        />
      </template>
    </div>
    <div class="flex">
      <button class="sl-campaign-item__button">
        <img :src="button1SVG" />
      </button>
      <button class="sl-campaign-item__button">
        <img :src="button2SVG" />
      </button>
      <button class="sl-campaign-item__button">
        <img :src="button3SVG" />
      </button>
    </div>

    <div></div>
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
  width: 20rem;
}
.sl-campaign-item__status {
  margin-top: 0.5rem;
}

.sl-campaign-item__progress {
  margin-left: 1.375rem;
}

.sl-campaign-item__button {
  border: 1px solid #e5e7f9;
  background: #fafaff;
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
  cursor: pointer;
}
</style>
