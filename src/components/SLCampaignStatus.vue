<script setup>
import { computed } from 'vue'

const props = defineProps({
  status: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    default: null
  },
  timeStamp: {
    type: String
  }
})
const statusText = computed(() => {
  return `${props.status} on ${props.timeStamp}`
})

const color = computed(() => {
  switch (props.status) {
    case 'Drafted':
      return 'grey'
    case 'Paused':
      return '#DD9553'
    case 'Stopped':
      return '#CB4B4B'
    default:
      return '#5ECA39'
  }
})
</script>

<template>
  <div>
    <span :style="{ color }">•</span>
    <span class="sl-campaign-status">{{ statusText }} | {{ count }} Sequences</span>
  </div>
</template>

<style scoped>
.sl-campaign-status {
  font-family: DM Sans;
  font-weight: 400;
  font-size: 14px;
  line-height: 18.23px;
  letter-spacing: 0%;
  color: grey;
}
</style>
