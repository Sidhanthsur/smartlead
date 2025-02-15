<script setup>
import SLSideMenuItem from './SLSideMenuItem.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
defineProps({
  options: {
    type: Array,
    required: true
  },
  bottomOptions: {
    type: Array,
    default: () => []
  }
})

const isActive = (option) => {
  if (option.route) {
    return route.name === option.route
  }
  return false
}
</script>
<template>
  <div class="sl-side-menu">
    <SLSideMenuItem
      :key="sideOption.label"
      :disabled="sideOption?.disabled"
      :active="isActive(sideOption)"
      @click="sideOption.onClick"
      :class="[
        { 'cursor-not-allowed': sideOption?.disabled },
        {
          'cursor-pointer': !sideOption?.disabled
        }
      ]"
      v-for="sideOption in options"
      :icon="sideOption.icon"
      :label="sideOption.label"
    />
    <div class="sl-side-menu__bottom-container">
      <SLSideMenuItem
        :disabled="sideOption?.disabled"
        :active="isActive(sideOption)"
        @click="sideOption.onClick"
        v-for="sideOption in bottomOptions"
        :icon="sideOption.icon"
        :label="sideOption.label"
      />
    </div>
  </div>
</template>
<style>
.sl-side-menu {
  height: 100vh;
  width: 14.8rem;
  background-color: white;
  border-right: 1px solid #f0f1f6;
}

.sl-side-menu__bottom-container {
  position: absolute;
  bottom: 0;
  padding-bottom: 1.25rem;
}
</style>
