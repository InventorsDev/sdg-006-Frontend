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
                    <router-link to="/" tag="li" active-class="signin-button" exact>Explore</router-link>
                    <a href="">English</a>
                    <a href="" class="active">Become an Expert</a>
                    <router-link to="/register" tag="li" active-class="signin-button" v-if="!auth">Sign Up</router-link>
                    <router-link to="/login" tag="li" active-class="signin-button" v-if="!auth">Sign In</router-link>
                    <router-link to="/dashboard" tag="li" active-class="signin-button" v-if="auth">Dashboard</router-link>
                    <button class="" @click="handleLogout()" v-if="auth">Logout</button>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as types from '../store/types'
    
    export default {
        name: 'Navbar',
        computed : {
            ...mapGetters({
                auth: types.IS_AUTHENTICATED
            }),
        },
        methods :{
            handleLogout() {
                console.log('seen')
                this.$store.dispatch(types.SIGN_OUT_ACTION)
            }
        }
    }
</script>
<style>

</style>