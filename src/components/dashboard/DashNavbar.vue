<template>
    <div>
         <nav class="dash__navbar">
            <div class="dash-inner-width">
                <a href="#" class="logo"></a>
                <div class="dash__box">
                    <form action="">
                        <img src="../../assets/img/dashboard/icons/search.png" alt="" class="fa-envelope">
                        <input type="text" placeholder="Search">
                        <input type="submit" name="" value="Search" class="dashII__seaarch">
                    </form>
                </div>
                <div class="dash__navbar__menu">
                    <router-link :to="{name : dashboard }" tag="li" active-class="nav__link active" exact>Dashboard</router-link>
                    <router-link :to="{name : doctors }" tag="li" active-class="nav__link" exact>Doctors</router-link>
                    <router-link :to="{name : appointments }" tag="li" active-class="nav__link" exact>Appointments</router-link>
                    <a href=""><img src="../../assets/img/dashboard/icons/Chat.png" alt=""></a>
                    <a href="" class=""><img src="../../assets/img/dashboard/icons/call.png" alt=""></a>
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
        mounted() {
                const navLink = document.querySelectorAll('.nav__link')

                function linkAction(){
                    navLink.forEach(n => n.classList.remove('active'))
                    this.classList.add('active')
                }

                navLink.forEach(n => n.addEventListener('click', linkAction))

        },
    }
</script>

<style>

</style>