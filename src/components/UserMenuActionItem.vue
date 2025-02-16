<script setup>
defineProps(['menuItems'])
</script>
<template>
  <div class="user-menu-action-item">
    <div
      v-for="item in menuItems"
      :key="item.label"
      class="user-menu-action-item__item"
      @click="item?.onClick && item.onClick()"
    >
      <img :src="item.icon" alt="icon" />
      <span class="user-menu-action-item__item-label">{{ item.label }}</span>
    </div>
  </div>
</template>
<style scoped>
.user-menu-action-item {
  padding: 0.5rem 0;
  border-top: 0.0625rem solid #f1f2f8;
}

.user-menu-action-item__item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  cursor: pointer;
}

.user-menu-action-item__item-label {
  font-family: 'DM Sans';
  font-size: 0.875rem;
  color: #282b42;
}

.user-menu-action-item__item:hover {
  background-color: #f7f7f9;
}
</style>
