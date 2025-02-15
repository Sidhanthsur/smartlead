<script setup>
import { computed } from 'vue'
import blockSVG from '@/assets/status_block.svg'
import draftSVG from '@/assets/status_draft.svg'
import pauseSVG from '@/assets/status_pause.svg'
import { status as statusEnum } from '@/constants/status'

const props = defineProps({
  progress: {
    type: Number,
    default: 25,
    validator: (value) => value >= 0 && value <= 100
  },
  size: {
    type: Number,
    default: 45
  },
  status: {
    type: String
  }
})

const radius = computed(() => props.size * 0.4)
const circumference = computed(() => 2 * Math.PI * radius.value)
const dashOffset = computed(
  () => circumference.value - (props.progress / 100) * circumference.value
)

const centerPoint = computed(() => props.size / 2)

const icon = computed(() => {
  switch (props.status) {
    case statusEnum.STOPPED:
      return blockSVG
    case statusEnum.DRAFTED:
      return draftSVG
    case statusEnum.PAUSED:
      return pauseSVG
    default:
      return ''
  }
})

const strokeColor = computed(() => {
  switch (props.status) {
    case statusEnum.STOPPED:
      return '#CB4B4B'
    case statusEnum.PAUSED:
      return '#DD9553'
    default:
      return '#5eca30'
  }
})
</script>

<template>
  <div class="sl-campaign-progress" :style="{ width: `${size}px`, height: `${size}px` }">
    <svg :width="size" :height="size">
      <!-- Background circle -->
      <circle
        :cx="centerPoint"
        :cy="centerPoint"
        :r="radius"
        class="sl-campaign-progress__progress-bg"
      />
      <!-- Progress circle -->
      <circle
        :cx="centerPoint"
        :cy="centerPoint"
        :r="radius"
        class="sl-campaign-progress__progress-circle"
        :style="{
          strokeDasharray: circumference,
          strokeDashoffset: dashOffset,
          stroke: strokeColor
        }"
      />
    </svg>

    <div class="sl-campaign-progress__progress-text">
      <img v-if="icon" :src="icon" alt="status" />
      <span v-else class="sl-campaign-progress__progress-value">{{ progress }}%</span>
    </div>
  </div>
</template>

<style scoped>
.sl-campaign-progress {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.sl-campaign-progress__progress-bg {
  fill: none;
  stroke: #edeef8;
  stroke-width: 0.25rem;
}

.sl-campaign-progress__progress-circle {
  fill: none;
  stroke-width: 0.25rem;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  transition: stroke-dashoffset 0.3s ease;
}

.sl-campaign-progress__progress-text {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.sl-campaign-progress__progress-value {
  font-family: DM Sans;
  font-weight: 400;
  font-size: 12px;
  line-height: 15.62px;
  letter-spacing: 0%;
  text-align: center;
}
</style>
