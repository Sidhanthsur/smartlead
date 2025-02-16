<script setup>
import { useUserStore } from '@/stores/user'
import ellipseSVG from '@/assets/Ellipse.svg'
import router from '@/router'
import UserMenuProgress from '@/components/UserMenuProgress.vue'
import giftsSVG from '@/assets/gifts.svg'
import helpSVG from '@/assets/help.svg'
import logoutSVG from '@/assets/logout.svg'
import settingsSVG from '@/assets/settings.svg'
import slackTwoSVG from '@/assets/slack-two.svg'
import UserMenuActionItem from './UserMenuActionItem.vue'
const { user, setUser } = useUserStore()

defineProps(['isOpen'])

const onLogout = () => {
  setUser(null)
  router.push({ name: 'login' })
}

const menuItemsSectionOne = [
  { label: 'Settings', icon: settingsSVG },
  { label: "What's new", icon: giftsSVG },
  { label: 'Help Guide', icon: helpSVG },
  { label: 'Join our slack community', icon: slackTwoSVG }
]

const menuItemsSectionTwo = [{ label: 'Log out', icon: logoutSVG, onClick: onLogout }]
</script>

<template>
  <div v-if="isOpen" class="user-menu__popup">
    <div class="user-menu__profile">
      <div class="user-menu__profile-info">
        <img class="user-menu__avatar" :src="ellipseSVG" />
        <div class="user-menu__details">
          <div class="user-menu__name">{{ user.username }}</div>
          <div class="user-menu__email">{{ user.email }}</div>
        </div>
      </div>
    </div>

    <div class="user-menu__workspace">
      Your credit usage detail

      <UserMenuProgress
        :percentage="45"
        left-label="Active Leads"
        left-value="84, 000 / 90, 000"
        right-label="Get credits"
        color="#DD9553"
      />
      <UserMenuProgress
        :percentage="95"
        left-label="Email Credits"
        left-value="84, 000 / 90, 000"
      />
    </div>
    <UserMenuActionItem :menuItems="menuItemsSectionOne" />
    <UserMenuActionItem :menuItems="menuItemsSectionTwo" />
  </div>
</template>

<style scoped>
.user-menu__avatar {
  width: 3rem;
  height: 3rem;
  font-size: 1.125rem;
  background: #5e5adb;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'DM Sans';
  font-weight: 500;
}

.user-menu__popup {
  position: absolute;
  top: 70%;
  right: 0.875rem;
  width: 21.375rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.875rem 0 #8d8fa966;
  margin-top: 0.5rem;
  z-index: 10;
}

.user-menu__profile {
  padding: 1rem;
  border-bottom: 0.0625rem solid #f1f2f8;
}

.user-menu__profile-info {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.user-menu__details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.user-menu__name {
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 0.875rem;
  color: #282b42;
}

.user-menu__email {
  font-family: 'DM Sans';
  font-size: 0.875rem;
  color: #686b8a;
}

.user-menu__workspace {
  display: flex;
  flex-direction: column;
  background: #f7f8fe;
  padding: 1.125rem;
}

.user-menu__workspace-label {
  font-family: 'DM Sans';
  font-size: 0.75rem;
  color: #686b8a;
}

.user-menu__workspace-name {
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 0.875rem;
  color: #282b42;
}
</style>
