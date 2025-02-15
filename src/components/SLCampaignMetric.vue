<script setup>
import errorSVG from '@/assets/error.svg'
import positiveReplySVG from '@/assets/positivereply.svg'
import { status as statusEnum } from '@/constants/status'
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
  if (props.status === statusEnum.DRAFTED && props.type !== 'positiveReply') {
    return errorSVG
  } else if (props.type === 'positiveReply') {
    return positiveReplySVG
  }
  return null
})
</script>

<template>
  <div class="sl-campaign-metric">
    <div class="sl-campaign-metric__content">
      <div>
        <span :style="{ color }" class="sl-campaign-metric__value">{{ value }}</span>
        <span v-if="percentage" class="sl-campaign-metric__percentage">{{ percentage }}%</span>
      </div>
      <div class="flex items-center">
        <div class="sl-campaign-metric__label">{{ label }}</div>
        <img v-if="icon" :src="icon" :alt="label" class="sl-campaign-metric__icon margin-left-2" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.sl-campaign-metric {
  display: flex;
  align-items: center;
  background: white;
  min-width: 2.5rem;
  margin-right: 2rem;
}

.sl-campaign-metric__icon {
  width: 0.75rem;
  height: 0.75rem;
}

.sl-campaign-metric__content {
  display: flex;
  flex-direction: column;
}

.sl-campaign-metric__value {
  font-family: DM Sans;
  font-weight: 500;
  font-size: 1.25rem;
}

.sl-campaign-metric__label {
  font-family: DM Sans;
  font-weight: 400;
  font-size: 0.875rem;
  color: #999ba8;
}

.sl-campaign-metric__percentage {
  font-family: DM Sans;
  font-weight: 400;
  font-size: 0.75rem;
  color: #999ba8;
  margin-left: 0.25rem;
}
</style>
