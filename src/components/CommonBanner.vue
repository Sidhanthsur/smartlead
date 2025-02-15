<script setup>
import smartSvg from '@/assets/smart.svg'
</script>
<template>
  <div class="common-banner">
    <img :src="smartSvg" />
  </div>
</template>
<style scoped>
.common-banner {
  width: 100%;
  background: #00056a;
  height: 5rem;
  display: flex;
  align-items: center;
  padding: 1.5rem 1.125rem;
}
</style>
