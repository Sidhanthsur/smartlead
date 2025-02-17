<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'submit', 'reset'].includes(value)
  }
})
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    class="sl-button"
    :class="{
      'sl-button--disabled': disabled,
      'sl-button--loading': loading,
      'sl-button--full': type === 'submit'
    }"
  >
    <span v-if="loading" class="sl-button__loading-spinner"></span>
    <span :class="{ 'opacity-50': loading }">{{ label }}</span>
  </button>
</template>

<style scoped>
.sl-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  padding: 0 1.25rem;
  border-radius: 0.1875rem;
  border: none;
  background: #757ae9;
  color: white;
  cursor: pointer;
  font-family: DM Sans;
  font-weight: 500;
  font-size: 0.9375rem;
  line-height: 25px;
  letter-spacing: 0%;
  text-align: center;
}

.sl-button--disabled {
  background: #edeef8;
  color: #a0a0a0;
  cursor: not-allowed;
}

.sl-button__loading-spinner {
  width: 1rem;
  height: 1rem;
  border: 0.125rem solid #ffffff;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 0.8s linear infinite;
}

.sl-button--full {
  width: 100%;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
