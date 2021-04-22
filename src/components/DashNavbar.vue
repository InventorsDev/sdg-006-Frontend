<template>
    <div>
        <nav class="dash__navbar">
            <div class="dash-inner-width">
                <!-- <img src="img/dashboard/sort.png" alt=""> -->
                <a href="#" class="logo"></a>
                <div class="dash__box">
                    <form action="">
                        <img src="../assets/img/search.png" alt="" class="">
                        <input type="text" placeholder="Search">
                        <input type="submit" name="" value="Search" class="dashII__seaarch">
                    </form>
                </div>
                <div class="dash__navbar__menu">
                    <a href="#" class="active">Dashboard</a>
                    <a href="#">Doctors</a>
                    <a href="#">Appointments</a>
                    <a href=""><img src="../assets/img/dashboard/Chat.png" alt=""></a>
                    <a href="" class=""><img src="../assets/img/dashboard/call.png" alt=""></a>
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