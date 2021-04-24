<template>
    <div>
        <nav class="dash__navbar">
            <div class="dash-inner-width">
                <!-- <img src="img/dashboard/sort.png" alt=""> -->
                <a href="#" class="logo"></a>
                <div class="dash__box">
                    <form action="">
                        <img src="../../assets/img/search.png" alt="" class="">
                        <input type="text" placeholder="Search">
                        <input type="submit" name="" value="Search" class="dashII__seaarch">
                    </form>
                </div>
                <div class="dash__navbar__menu">
                    <router-link :to="{name : dashboard }" tag="li" active-class="active" exact>Dashboard</router-link>
                    <router-link :to="{name : doctors }" tag="li" active-class="active" exact>Doctors</router-link>
                    <router-link :to="{name : appointments }" tag="li" active-class="active" exact>Appointments</router-link>
                    <a href=""><img src="img/Chat.png" alt=""></a>
                    <a href="" class=""><img src="img/call-center-agent 1.png" alt=""></a>
                </div>
            </div>
        </nav>
        <div class="bottom_nav">
            <ul>
            <li><a href="#">Pediatricians</a></li>
            <li><a href="#">Cardiologists</a></li>
            <li><a href="#">Psychiatrists</a></li>
            <li><a href="#">Anesthesiologists</a></li>
            <li><a href="#">Internists</a></li>
            <li><a href="#">Geriatric</a></li>
            <li><a href="#">Dermatologist </a></li>
            <li><a href="#">Geneticist</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DashNavbar',
    }
</script>

<style>

</style>