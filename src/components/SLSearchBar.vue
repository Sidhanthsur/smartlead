<script setup>
import searchSVG from '@/assets/Union.svg'

const searchQuery = defineModel()
</script>

<template>
  <div class="sl-search-bar">
    <div class="sl-search-bar__search-icon">
      <img :src="searchSVG" alt="search" />
    </div>
    <input
      aria-label="Search input"
      type="text"
      class="sl-search-bar__search-input"
      placeholder="Search campaigns"
      v-model="searchQuery"
    />
  </div>
</template>

<style scoped>
.sl-search-bar {
  display: flex;
  align-items: center;
  background: #fafaff;
  border-radius: 0.375rem;
  height: 2.25rem;
  width: 15rem;
  padding: 0 0.75rem;
  border: 1px solid #e5e7f9;
}

.sl-search-bar__search-icon {
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
}

.sl-search-bar__search-input {
  border: none;
  background: transparent;
  outline: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  color: #282b42;
  width: 100%;
}
</style>
