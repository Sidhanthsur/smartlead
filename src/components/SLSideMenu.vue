<script setup>
import SLSideMenuItem from './SLSideMenuItem.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
defineProps({
  options: {
    type: Array,
    required: true
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
    <SLSideMenuItem :disabled="option?.disabled" :active="isActive(sideOption)" @click="sideOption.onClick"
      v-for="sideOption in options" :icon="sideOption.icon" :label="sideOption.label" />
  </div>
</template>
<style>
.sl-side-menu {
  height: 100vh;
  width: 14.375rem;
  background-color: white;
}
</style>
