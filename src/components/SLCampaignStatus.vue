<script setup>
import { computed } from 'vue'
import { status as statusEnum } from '@/constants/status'

// Constants
const STATUS_COLORS = {
  [statusEnum.DRAFTED]: 'grey',
  [statusEnum.PAUSED]: '#DD9553',
  [statusEnum.STOPPED]: '#CB4B4B',
  default: '#5ECA39'
}

const props = defineProps({
  status: {
    type: String,
    required: true,
    validator: (value) => Object.values(statusEnum).includes(value)
  },
  count: {
    type: Number,
    default: 0
  },
  timeStamp: {
    type: String,
    default: ''
  }
})

// Computed properties
const statusText = computed(() =>
  props.timeStamp ? `${props.status} on ${props.timeStamp}` : props.status
)

const color = computed(() => STATUS_COLORS[props.status] || STATUS_COLORS.default)

const sequenceText = computed(
  () => `${props.count} ${props.count === 1 ? 'Sequence' : 'Sequences'}`
)
</script>

<template>
  <div class="sl-campaign-status-wrapper">
    <span class="sl-campaign-status-dot" :style="{ color }">•</span>
    <span class="sl-campaign-status"> {{ statusText }} | {{ sequenceText }} </span>
  </div>
</template>

<style scoped>
.sl-campaign-status-wrapper {
  display: inline-flex;
  align-items: center;
}

.sl-campaign-status-dot {
  margin-right: 0.125rem;
}

.sl-campaign-status {
  font-family: DM Sans;
  font-weight: 400;
  font-size: 14px;
  line-height: 18.23px;
  letter-spacing: 0%;
  color: grey;
}
</style>
