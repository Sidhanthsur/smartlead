<script setup>
import { computed } from 'vue'
import blockSVG from '@/assets/status_block.svg'
import draftSVG from '@/assets/status_draft.svg'
import pauseSVG from '@/assets/status_pause.svg'
import { status as statusEnum } from '@/constants/status'

// Constants
const STROKE_WIDTH = 0.25

const STATUS_ICONS = {
  [statusEnum.STOPPED]: blockSVG,
  [statusEnum.DRAFTED]: draftSVG,
  [statusEnum.PAUSED]: pauseSVG
}

const STATUS_COLORS = {
  [statusEnum.STOPPED]: '#CB4B4B',
  [statusEnum.PAUSED]: '#DD9553',
  default: '#5eca30'
}

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

// SVG calculations
const radius = computed(() => props.size * 0.4)
const circumference = computed(() => 2 * Math.PI * radius.value)
const centerPoint = computed(() => props.size / 2)
const dashOffset = computed(
  () => circumference.value - (props.progress / 100) * circumference.value
)

// Status-based computed properties
const icon = computed(() => STATUS_ICONS[props.status] || '')
const strokeColor = computed(() => STATUS_COLORS[props.status] || STATUS_COLORS.default)
</script>

<template>
  <div class="sl-campaign-progress" :style="{ width: `${size}px`, height: `${size}px` }">
    <svg :width="size" :height="size">
      <circle
        :cx="centerPoint"
        :cy="centerPoint"
        :r="radius"
        class="sl-campaign-progress__progress-bg"
        :style="{ strokeWidth: `${STROKE_WIDTH}rem` }"
      />
      <circle
        :cx="centerPoint"
        :cy="centerPoint"
        :r="radius"
        class="sl-campaign-progress__progress-circle"
        :style="{
          strokeDasharray: circumference,
          strokeDashoffset: dashOffset,
          stroke: strokeColor,
          strokeWidth: `${STROKE_WIDTH}rem`
        }"
      />
    </svg>

    <div class="sl-campaign-progress__progress-text">
      <img v-if="icon" :src="icon" :alt="`${status} status`" />
      <span v-else class="sl-campaign-progress__progress-value"> {{ progress }}% </span>
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
}

.sl-campaign-progress__progress-circle {
  fill: none;
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
