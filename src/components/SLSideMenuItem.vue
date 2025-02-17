<script setup>
defineProps({
  icon: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div
    class="sl-side-menu-item"
    :class="{
      'sl-side-menu-item--active': active,
      'sl-side-menu-item__disabled': disabled
    }"
  >
    <img
      v-if="icon"
      class="sl-side-menu-item__icon"
      :class="{
        'sl-side-menu-item__icon--in-active': !active
      }"
      :src="icon"
    />
    <span class="sl-side-menu-item__label">{{ label }}</span>
  </div>
</template>

<style scoped>
.sl-side-menu-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #686b8a;
  padding: 0.625rem 1rem;
  border-left: 0.2rem solid transparent;
}

.sl-side-menu-item--active {
  background-color: #f7f7f9;
  background: #757ae91a;
  border-left: 0.2rem solid #757ae9;
}

.sl-side-menu-item__icon--in-active {
  filter: grayscale(100%);
}

.sl-side-menu-item__disabled {
  cursor: not-allowed;
}

.sl-side-menu-item__icon {
  width: 1.25rem;
  height: 1.25rem;
}

.sl-side-menu-item__label {
  font-family: DM Sans;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 18.23px;
  letter-spacing: 0%;
  margin-left: 1rem;
}
</style>
