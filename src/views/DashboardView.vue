<script setup>
import SLSideMenu from '@/components/SLSideMenu.vue'
import UserHeader from '@/components/UserHeader.vue'
import useDashboard from '@/composables/useDashboard'

const { options, bottomOptions } = useDashboard()
</script>
<template>
  <div class="page">
    <UserHeader class="dashboard-view__header" />
    <div class="flex dashboard-view__content">
      <SLSideMenu :options="options" :bottomOptions="bottomOptions" />
      <RouterView />
    </div>
  </div>
</template>
<style>
.dashboard-view {
  display: flex;
}

.dashboard-view__header {
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>
