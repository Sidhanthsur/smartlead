<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  }
});

const model = defineModel()

const showPassword = ref(false);
const inputType = computed(() => {
  if (props.type === 'password') {
    return showPassword.value ? 'text' : 'password';
  }
  return props.type;
});

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
</script>

<template>
  <div class="input-group">
    <label v-if="label" class="input-label">{{ label }}</label>
    <div class="input-wrapper">
      <input :type="inputType" v-model="model" :value="model" :placeholder="placeholder" class="input-field" />
      <button v-if="type === 'password'" class="password-toggle" @click="togglePassword">
        <span class="icon">{{ showPassword ? 'Hide' : 'Show' }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.input-label {
  font-family: DM Sans;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0%;
  color: #7A7D9C;

}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.password-toggle {
  position: absolute;
  right: 0.75rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
}

.icon {
  font-family: DM Sans;
  font-weight: 400;
  font-size: 14px;
  line-height: 18.23px;
  letter-spacing: 0%;
  color: #686B8A;

}

.password-toggle:hover .icon {
  opacity: 1;
}

.input-field {
  width: 100%;
  padding-right: 2.5rem;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s ease;
}

.input-field:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
}

.input-field::placeholder {
  color: #94a3b8;
}
</style>
