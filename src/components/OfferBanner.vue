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
        <span class="offer-banner__text">Here's a chance to further increase your ROI. </span>
        <span class="offer-banner__promo-big offer-banner__promo-big--bold">Pay only $540.00</span>
        <span class="offer-banner__promo-big"> instead of <s>$59000</s></span>
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

.offer-banner__text {
  font-family: DM Sans;
  font-weight: 400;
  font-size: 14px;
  line-height: 18.23px;
  letter-spacing: 0%;
  color: #00056a;
  margin-left: 1.375rem;
}

.offer-banner__promo-big {
  font-family: DM Sans;
  font-size: 18px;
  line-height: 23.44px;
  text-align: center;
}

.offer-banner__promo-big--bold {
  font-weight: 700;
  color: #d85c7d;
}
</style>
