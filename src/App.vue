<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import Signin from './screens/auth/Login.vue'
import * as types from './store/types'

export default {
  name: 'App',
  components: {
    Signin
  },
  created() {
    this.$store.dispatch(types.AUTO_LOGIN_ACTION);
  }
}
</script>

<style>
  /* @import './assets/css/style.css'; */
</style>
