<script setup>
defineProps({
  icon: {
    type: String
  },
  label: {
    type: String,
    required: true
  },
  value: {
    type: [Number, String],
    required: true
  },
  color: {
    type: String,
    default: '#999BA8'
  },
  percentage: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <div class="campaign-metric">
    <div class="campaign-metric__content">
      <div class="flex">
        <div :style="{ color }" class="campaign-metric__value">{{ value }}</div>
        <div v-if="percentage" class="campaign-metric__percentage">{{ percentage }}%</div>
      </div>
      <div class="flex items-center">
        <div class="campaign-metric__label">{{ label }}</div>
        <img v-if="icon" :src="icon" :alt="label" class="campaign-metric__icon margin-left-2" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.campaign-metric {
  display: flex;
  align-items: center;
  background: white;
  min-width: 2.5rem;
  margin-right: 2rem;
}

.campaign-metric__icon {
  width: 0.75rem;
  height: 0.75rem;
}

.campaign-metric__content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.campaign-metric__value {
  font-family: DM Sans;
  font-weight: 500;
  font-size: 20px;
  line-height: 26.04px;
  letter-spacing: 0%;
}

.campaign-metric__label {
  font-family: DM Sans;
  font-weight: 400;
  font-size: 14px;
  line-height: 18.23px;
  letter-spacing: 0%;
  color: #999ba8;
}

.campaign-metric__percentage {
  font-family: DM Sans;
  font-weight: 400;
  font-size: 12px;
  line-height: 15.62px;
  letter-spacing: 0%;
  color: #999ba8;
  align-self: flex-end;
  margin-left: 0.125rem;
}
</style>
