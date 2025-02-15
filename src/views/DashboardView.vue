<script setup>
import SLSideMenu from '@/components/SLSideMenu.vue'
import EmailSVG from '@/assets/email.svg'
import LeadsSVG from '@/assets/leads.svg'
import CampaignsSVG from '@/assets/campaigns.svg'
import router from '@/router'
import SlackSVG from '@/assets/slack.svg'
import PlaySVG from '@/assets/play.svg'
import UserHeader from '@/components/UserHeader.vue'

const options = [
  {
    label: 'All leads',
    icon: LeadsSVG,
    onClick: () => {
      console.log('All leads clicked')
      router.push({ name: 'dashboard' })
    },
    route: 'dashboard'
  },
  {
    label: 'Master Inbox',
    icon: EmailSVG,
    disabled: true
  },
  {
    label: 'Email Campaigns',
    icon: CampaignsSVG,
    route: 'emails',
    onClick: () => {
      console.log('Email Campaigns clicked')
      router.push({ name: 'emails' })
    }
  }
]

const bottomOptions = [
  {
    label: 'Join Slack Community',
    disabled: true,
    icon: SlackSVG
  },
  {
    label: 'Smartlead Tutorials',
    icon: PlaySVG,
    disabled: true
  }
]
</script>
<template>
  <div class="page">
    <UserHeader class="dashboard-view__header" />
    <div class="flex dashboard-view__content">
      <SLSideMenu :options="options" :bottomOptions="bottomOptions" />
      <RouterView />
    </div>
  </div>
</template>
<style>
.dashboard-view {
  display: flex;
}

.dashboard-view__header {
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>
