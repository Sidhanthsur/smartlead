<script setup>
import illustrationSVG from '@/assets/illustration.svg'
import SLButton from '@/components/SLButton.vue'
</script>

<template>
  <div class="leads-view">
    <div class="leads-view__title">Get Free New Contacts and Leads</div>
    <div class="leads-view__sub-title">
      Scrape verified emails straight from LinkedIn using our Sales Navigator lead extractor.
      Download the extension and kick off!
    </div>
    <img :src="illustrationSVG" alt="Illustration" />
    <SLButton class="leads-view__button" label="Add to Chrome" />
  </div>
</template>
<style>
.leads-view {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
}

.leads-view__button {
  margin-top: 2.625rem;
}

.leads-view__title {
  font-family: DM Sans;
  font-weight: 700;
  font-size: 15px;
  line-height: 19.53px;
  letter-spacing: 0%;
  text-align: center;
}

.leads-view__sub-title {
  font-family: DM Sans;
  font-weight: 400;
  font-size: 14px;
  line-height: 25.2px;
  letter-spacing: 0%;
  text-align: center;
  max-width: 28.32rem;
  margin-bottom: 2.625rem;
  margin-top: 0.5rem;
}
</style>
