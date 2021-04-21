<template>
    <div>
        <Navbar/>
        <div class="bannerr">
            <div>
                <h2>Find the perfect Doctor <br>and book an appointment</h2>
                <div class="box ">
                    <form action="">
                        <img src="../assets/img/search.png" alt="" class="fa-envelope">
                        <input type="text" placeholder="Try “Radiologists” ">
                        <input type="submit" name="" value="Search">
                    </form>
                </div>
                <div>
                <div class="popular-list">
                    <h3>Popular:</h3>
                    <ul>
                        <li><a href="#">Pediatricians</a></li>
                        <li><a href="#">Cardiologists</a></li>
                        <li><a href="#">{{ name }}</a></li>
                        <li><a href="#">Psychiatrists</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="left-image">
                <img src="../assets/img/maleDoctor.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Homepage',
  components:{
      Navbar
  },
  computed : {
      name() {
          return this.$store.state.name;
      }
  }
}
</script>

<style>
</style>