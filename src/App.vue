<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import Signin from './screens/auth/Login.vue'

export default {
  name: 'App',
  components: {
    Signin
  }
}
</script>

<style>
  /* @import './assets/css/style.css'; */
</style>
