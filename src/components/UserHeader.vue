<script setup>
import smartSvg from '@/assets/smart.svg'
import ellipseSVG from '@/assets/Ellipse.svg'
import giftsSVG from '@/assets/gifts.svg'
import questionSVG from '@/assets/question.svg'
import upgradeSVG from '@/assets/upgrade.svg'
import { useUserStore } from '@/stores/user'
import OfferBanner from './OfferBanner.vue'
import { storeToRefs } from 'pinia'

const store = useUserStore()
const { isOfferVisible } = storeToRefs(store)
</script>
<template>
  <OfferBanner v-if="isOfferVisible" />
  <div class="user-header">
    <img :src="smartSvg" />
    <div class="flex items-center">
      <img class="user-header__image" :src="upgradeSVG" />
      <img class="user-header__image" :src="giftsSVG" />
      <img class="user-header__image" :src="questionSVG" />
      <img class="user-header__image cursor-pointer" :src="ellipseSVG" />
    </div>
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
