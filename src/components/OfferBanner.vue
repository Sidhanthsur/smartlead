<script setup>
import offerSVG from '@/assets/offer.svg'
import SLButton from './SLButton.vue'
import crossSVG from '@/assets/cross.svg'
import { useUserStore } from '@/stores/user'

const { setOfferVisible } = useUserStore()
</script>
<template>
  <div class="offer-banner">
    <div class="flex items-center">
      <img :src="offerSVG" alt="offer" />
      <div>
        Here's a chance to further increase your ROI.
        <span>Here's a chance to further increase your ROI.</span>
      </div>
    </div>

    <div class="flex items-center">
      <SLButton label="15% off for 3 months" class="offer-banner__button" />
      <img
        @click="
          () => {
            setOfferVisible(false)
          }
        "
        :src="crossSVG"
        class="cursor-pointer"
        alt="close"
      />
    </div>
  </div>
</template>

<style scoped>
.offer-banner {
  height: 5rem;
  background: #757ae933;
  display: flex;
  justify-content: space-between;
  padding: 0rem 1.875rem;
}

.offer-banner__button {
  margin-right: 1.875rem;
}
</style>
