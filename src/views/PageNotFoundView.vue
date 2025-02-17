<script setup>
import CommonBanner from '@/components/CommonBanner.vue'
</script>
<template>
  <div class="page">
  <CommonBanner />
   <div class="page-not-found__content">
    <h1>404</h1>
    <p>Page not found</p>
   </div>
  </div>

</template>
<style scoped>
.page-not-found__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
