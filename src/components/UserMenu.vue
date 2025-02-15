<script setup>
import { useUserStore } from '@/stores/user'
import ellipseSVG from '@/assets/Ellipse.svg'
import router from '@/router'
const { user, setUser } = useUserStore()

defineProps(['isOpen'])

const onLogout = () => {
  setUser(null)
  router.push({ name: 'login' })
}

const menuItems = [
  { label: 'Profile Settings', icon: '⚙️' },
  { label: 'Billing', icon: '💳' },
  { label: 'API Documentation', icon: '📄' },
  { label: 'Log out', icon: '🚪', danger: true, onClick: onLogout }
]
</script>

<template>
  <div v-if="isOpen" class="user-menu__popup">
    <div class="user-menu__profile">
      <div class="user-menu__profile-info">
        <img class="user-avatar user-avatar--large" :src="ellipseSVG" />
        <div class="user-details">
          <div class="user-name">{{ user.username }}</div>
          <div class="user-email">{{ user.email }}</div>
        </div>
      </div>
      <div class="workspace">
        <div class="workspace-label">Workspace</div>
        <div class="workspace-name">Smartlead</div>
      </div>
    </div>

    <div class="menu-items">
      <div
        v-for="item in menuItems"
        :key="item.label"
        class="menu-item"
        :class="{ 'menu-item--danger': item.danger }"
        @click="item?.onClick && item.onClick()"
      >
        <span class="menu-item__icon">{{ item.icon }}</span>
        <span class="menu-item__label">{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-menu {
  position: relative;
}

.user-menu__trigger {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px;
}

.user-avatar {
  width: 32px;
  height: 32px;
  background: #5e5adb;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'DM Sans';
  font-weight: 500;
}

.user-avatar--large {
  width: 48px;
  height: 48px;
  font-size: 18px;
}

.dropdown-arrow {
  font-size: 12px;
  color: #686b8a;
}

.user-menu__popup {
  position: absolute;
  top: 100%;
  right: 0;
  width: 280px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 8px;
  z-index: 10;
}

.user-menu__profile {
  padding: 16px;
  border-bottom: 1px solid #e5e7f9;
}

.user-menu__profile-info {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.user-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.user-name {
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 14px;
  color: #282b42;
}

.user-email {
  font-family: 'DM Sans';
  font-size: 14px;
  color: #686b8a;
}

.workspace {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.workspace-label {
  font-family: 'DM Sans';
  font-size: 12px;
  color: #686b8a;
}

.workspace-name {
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 14px;
  color: #282b42;
}

.menu-items {
  padding: 8px 0;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.menu-item:hover {
  background-color: #f7f7f9;
}

.menu-item__label {
  font-family: 'DM Sans';
  font-size: 14px;
  color: #282b42;
}

.menu-item--danger .menu-item__label {
  color: #cb4b4b;
}
</style>
