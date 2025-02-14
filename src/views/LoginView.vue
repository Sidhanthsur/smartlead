<script setup>
import Banner from '@/components/Banner.vue';
import SLButton from '@/components/SLButton.vue';
import SLInput from '@/components/SLInput.vue';

import { ref } from 'vue';

const email = ref('');
const password = ref('');

function handleLogin() {
  console.log('email:', email.value);
  console.log('Password:', password.value);
}


</script>

<template>
  <div class="page">
    <header>
      <Banner />
    </header>
    <main class="login-view">
      <form class="login-view__card" @submit.prevent="handleLogin">

        <div class="login-view__card-title">Welcome to Smartlead.ai</div>
        <div class="login-view__card-sub-title">Log in to your account</div>
        <SLInput label="Email" v-model="email" placeholder="Enter your email" required />
        <SLInput v-model="password" label="Password" type="password" placeholder="Enter your password" />

        <SLButton label="Sign in" type="submit" :disabled="!(email && password)" />
      </form>
    </main>
  </div>
</template>
<style>
.login-view {
  display: flex;
  justify-content: center;
}

.login-view__card {
  background: #fff;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  min-width: 34rem;
  padding: 3.75rem;
  margin-top: 4rem;
}

.login-view__card-title {
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 24px;
  line-height: 31.25px;
  letter-spacing: 0%;
  text-align: center;
}

.login-view__card-sub-title {
  font-family: DM Sans;
  font-weight: 400;
  font-size: 14px;
  line-height: 18.23px;
  letter-spacing: 0%;
  text-align: center;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
}
</style>
