<script setup>
import errorSVG from '@/assets/error.svg'
import positiveReplySVG from '@/assets/positivereply.svg'
import { computed } from 'vue'
const props = defineProps({
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
  },
  type: {
    type: String,
    default: 'default'
  },
  status: {
    type: String
  }
})

const icon = computed(() => {
  if (props.status === 'Drafted' && props.type !== 'positiveReply') {
    return errorSVG
  } else if (props.type === 'positiveReply') {
    return positiveReplySVG
  }
  return ''
})
</script>

<template>
  <div class="campaign-metric">
    <div class="campaign-metric__content">
      <div>
        <span :style="{ color }" class="campaign-metric__value">{{ value }}</span>
        <span v-if="percentage" class="campaign-metric__percentage">{{ percentage }}%</span>
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
}

.campaign-metric__value {
  font-family: DM Sans;
  font-weight: 500;
  font-size: 20px;
}

.campaign-metric__label {
  font-family: DM Sans;
  font-weight: 400;
  font-size: 14px;
  color: #999ba8;
}

.campaign-metric__percentage {
  font-family: DM Sans;
  font-weight: 400;
  font-size: 12px;
  color: #999ba8;
  margin-left: 0.25rem;
}
</style>
