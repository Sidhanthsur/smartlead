<script setup>
import searchSVG from '@/assets/Union.svg'

const searchQuery = defineModel()
</script>

<template>
  <div class="search-bar">
    <div class="search-icon">
      <img :src="searchSVG" alt="search" />
    </div>
    <input type="text" class="search-input" placeholder="Search campaigns" v-model="searchQuery" />
  </div>
</template>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  background: #fafaff;
  border-radius: 6px;
  padding: 8px 12px;
  width: 240px;
}

.search-icon {
  display: flex;
  align-items: center;
  margin-right: 8px;
}

.search-input {
  border: none;
  background: transparent;
  outline: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  color: #282b42;
  width: 100%;
}

.search-input::placeholder {
  color: #686b8a;
}
</style>
