<script setup>
const props = defineProps({
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
});


</script>

<template>
  <div class="menu-item" :class="{
    'menu-item--active': active,
    'menu-item__disabled': disabled
  }">
    <img v-if="icon" class="menu-item__icon" :class="{
      'menu-item__icon--in-active': !active
    }" :src="icon" />
    <span class="menu-item__label">{{ label }}</span>
  </div>
</template>

<style scoped>
.menu-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #686B8A;
  padding: 0.625rem 1.25rem;
  border-left: 0.20rem solid transparent;
}


.menu-item--active {
  background-color: #F7F7F9;
  background: #757AE91A;
  border-left: 0.20rem solid #757AE9;
}

.menu-item__icon--in-active {
  filter: grayscale(100%);
}

.menu-item__disabled {
  cursor: not-allowed;
}

.menu-item__icon {
  width: 1.25rem;
  height: 1.25rem;
}

.menu-item__label {
  font-family: DM Sans;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 18.23px;
  letter-spacing: 0%;
  margin-left: 1rem;
}
</style>
