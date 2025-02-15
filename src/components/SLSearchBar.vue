<script setup>
import { ref } from 'vue'
import searchSVG from '@/assets/Union.svg'

const searchQuery = ref('')
const emit = defineEmits(['search'])

const handleInput = (event) => {
  searchQuery.value = event.target.value
  emit('search', searchQuery.value)
}
</script>

<template>
  <div class="search-bar">
    <div class="search-icon">
      <img :src="searchSVG" alt="search" />
    </div>
    <input
      type="text"
      class="search-input"
      placeholder="Search campaigns"
      :value="searchQuery"
      @input="handleInput"
    />
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
