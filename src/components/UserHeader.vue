<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import OfferBanner from './OfferBanner.vue'
import UserMenu from './UserMenu.vue'
import smartSvg from '@/assets/smart.svg'
import ellipseSVG from '@/assets/Ellipse.svg'
import giftsSVG from '@/assets/gifts.svg'
import questionSVG from '@/assets/question.svg'
import upgradeSVG from '@/assets/upgrade.svg'

const HEADER_ICONS = [
  { src: upgradeSVG, alt: 'Upgrade account', id: 'upgrade' },
  { src: giftsSVG, alt: 'Rewards', id: 'gifts' },
  { src: questionSVG, alt: 'Help', id: 'help' },
  { src: ellipseSVG, alt: 'User menu', id: 'menu', clickable: true }
]

const headerRef = ref(null)

const handleClickOutside = (event) => {
  if (headerRef.value && !headerRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

const toggleMenu = (event) => {
  event?.stopPropagation()
  isOpen.value = !isOpen.value
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const isOpen = ref(false)
const store = useUserStore()
const { isOfferVisible } = storeToRefs(store)
defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <div ref="headerRef">
    <OfferBanner v-if="isOfferVisible" />
    <header v-bind="$attrs" class="user-header" role="banner">
      <img :src="smartSvg" alt="Smart Lead Logo" />
      <nav class="flex items-center" aria-label="User navigation">
        <template v-for="icon in HEADER_ICONS" :key="icon.id">
          <img
            @click="icon.clickable && toggleMenu()"
            class="user-header__image"
            :src="icon.src"
            aria-hidden="true"
            :class="{ 'cursor-pointer': icon.clickable }"
          />
        </template>
      </nav>
      <UserMenu :isOpen="isOpen" />
    </header>
  </div>
</template>

<style scoped>
.user-header {
  width: 100%;
  background: #00056a;
  height: 3.125rem;
  display: flex;
  align-items: center;
  padding: 1.5rem 1.125rem;
  justify-content: space-between;
  position: relative;
}

.user-header__image {
  margin-right: 1.25rem;
}
</style>
