<script setup>
defineProps({
  percentage: {
    type: Number,
    required: true,
    validator: (value) => value >= 0 && value <= 100
  },
  color: {
    type: String,
    default: '#6CCB4B'
  },
  leftLabel: {
    type: String,
    default: 'Active Leads:'
  },
  leftValue: {
    type: String,
    default: '84,000 / 90,000'
  },
  rightLabel: {
    type: String
  }
})
</script>

<template>
  <div
    class="user-menu-progress"
    role="progressbar"
    :aria-valuenow="percentage"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div class="progress-bar">
      <div
        class="progress-bar-filled"
        :style="{ width: `${percentage}%`, backgroundColor: color }"
      ></div>
    </div>
    <div class="user-menu-progress__body flex justify-between">
      <div>
        <span class="user-menu-progress__left-sub">{{ leftLabel }}:</span>
        <span class="user-menu-progress__left-sub-value margin-left-2">{{ leftValue }}</span>
      </div>
      <div v-if="rightLabel" class="user-menu-progress__left-sub-value">
        {{ rightLabel }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-menu-progress {
  width: 100%;
  margin-top: 1rem;
}

.progress-bar {
  height: 0.375rem;
  background-color: #ddd;
  position: relative;
  border-radius: 0.188rem;
  overflow: hidden;
}

.progress-bar-filled {
  height: 100%;
  background-color: #42b983;
  transition: width 0.3s ease;
}

.user-menu-progress__body {
  margin-top: 0.75rem;
}

.user-menu-progress__left-sub {
  font-family: DM Sans;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 0.976rem;
  color: #000115;
}

.user-menu-progress__left-sub-value {
  font-family: DM Sans;
  font-weight: 500;
  font-size: 0.75rem;
  color: #757ae9;
  border-bottom: 0.0625rem dotted #757ae9;
}
</style>
