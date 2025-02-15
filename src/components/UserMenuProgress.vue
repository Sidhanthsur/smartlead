<template>
  <div class="user-menu-progress">
    <div class="progress-bar">
      <div
        class="progress-bar-filled"
        :style="{ width: percentage + '%', backgroundColor: color }"
      ></div>
    </div>
    <div class="user-menu-progress__body flex justify-between">
      <div>
        <span class="user-menu-progress__left-sub">{{ leftLabel }}:</span>
        <span class="user-menu-progress__left-sub-value margin-left-2">{{ leftValue }}</span>
      </div>
      <div v-if="rightLabel" class="user-menu-progress__left-sub-value">{{ rightLabel }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UserMenuProgress',
  props: {
    percentage: {
      type: Number
    },
    currentStepIndex: {
      type: Number,
      default: 0
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
  },
  computed: {
    progressPercent() {
      return this.steps.length
        ? Math.round(((this.currentStepIndex + 1) / this.steps.length) * 100)
        : 0
    }
  }
})
</script>

<style scoped>
.user-menu-progress {
  width: 100%;
  margin-top: 1rem;
}
.progress-bar {
  height: 6px;
  background-color: #ddd;
  position: relative;
}
.progress-bar-filled {
  height: 100%;
  background-color: #42b983;
  transition: width 0.3s;
}
.progress-info {
  margin-top: 8px;
  font-size: 0.9rem;
  text-align: center;
}

.user-menu-progress__left-sub {
  font-family: DM Sans;
  font-weight: 400;
  font-size: 12px;
  line-height: 15.62px;
  letter-spacing: 0%;
  color: #000115;
}

.user-menu-progress__left-sub-value {
  font-family: DM Sans;
  font-weight: 500;
  font-size: 12px;
  color: #757ae9;
  border-bottom: 1px dotted #757ae9;
}

.user-menu-progress__body {
  margin-top: 0.75rem;
}
</style>
