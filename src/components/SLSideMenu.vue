<script setup>
import SLSideMenuItem from './SLSideMenuItem.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
defineProps({
  options: {
    type: Array,
    required: true
  },
  bottomOptions: {
    type: Array,
    default: () => []
  }
});

const isActive = (option) => {
  // check if route of option is active
  if (option.route) {
    return route.name === option.route;
  }
  return false
}
</script>
<template>
  <div class="sl-side-menu">
    <SLSideMenuItem :key="sideOption.label" :disabled="sideOption?.disabled" :active="isActive(sideOption)"
      @click="sideOption.onClick" :class="[{ 'cursor-not-allowed': sideOption?.disabled }, {
        'cursor-pointer': !sideOption?.disabled
      }]" v-for="sideOption in options" :icon="sideOption.icon" :label="sideOption.label" />
    <div class="sl-side-menu__bottom-container">
      <SLSideMenuItem :disabled="sideOption?.disabled" :active="isActive(sideOption)" @click="sideOption.onClick"
        v-for="sideOption in bottomOptions" :icon="sideOption.icon" :label="sideOption.label" />
    </div>
  </div>
</template>
<style>
.sl-side-menu {
  height: 100vh;
  width: 14.375rem;
  background-color: white;
}

.sl-side-menu__bottom-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-bottom: 1.25rem;
}
</style>
