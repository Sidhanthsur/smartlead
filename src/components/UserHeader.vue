<script setup>
import { ref } from 'vue'
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

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const isOpen = ref(false)
const store = useUserStore()
const { isOfferVisible } = storeToRefs(store)
defineOptions({
  inheritAttrs: false
})
</script>
<template>
  <OfferBanner v-if="isOfferVisible" />
  <div v-bind="$attrs" class="user-header">
    <img :src="smartSvg" />
    <div class="flex items-center">
      <template v-for="icon in HEADER_ICONS" :key="icon.id">
        <img
          class="user-header__image"
          :class="{ 'cursor-pointer': icon.clickable }"
          :src="icon.src"
          :alt="icon.alt"
          @click="icon.clickable && toggleMenu()"
        />
      </template>
    </div>
    <UserMenu :isOpen="isOpen" />
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
}

.user-header__image {
  margin-right: 1.25rem;
}
</style>
