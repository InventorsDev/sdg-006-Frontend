<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import Homepage from './screens/Homepage.vue'

export default {
  name: 'App',
  components: {
    Homepage
  }
}
</script>

<style>
  @import './assets/css/style.css';
</style>
