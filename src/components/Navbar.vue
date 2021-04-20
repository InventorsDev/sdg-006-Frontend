<template>
    <div>
        <nav class="navbar-page">
            <div class="inner-width">
                <a href="#" class="logo"></a>
                <button class="menu-toggler active" style="outline: none;">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div class="navbar-menu">
                    <div class="icon cancel-btn">
                        <i class="fas fa-times"></i>
                    </div>
                    <a href="" class="active">Explore</a>
                    <a href="">English</a>
                    <a href="">Become an Expert</a>
                    <router-link to="/register">Sign Up</router-link>
                    <router-link to="/signin"  class="signin-button">Sign In</router-link>
                </div>
            </div>
        </nav>
    </div>
    
</template>

<script>
    export default {
        name: 'Navbar',
    }
</script>

<style>
</style>