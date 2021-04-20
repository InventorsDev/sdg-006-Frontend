<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import Signin from './screens/auth/signin.vue'

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
