<template>
    <div>
        <!-- ============ Right Side Image ============== -->
        <img src="../../assets/img/sigin.png" alt="" class="wave">
        <img src="../../assets/img/signintwo.png" alt="" class="wave">
        <!-- ============== End of Right side Image =============== -->

        <!-- =========== Form  =================-->
        <div class="container">
            <div class="form-container">
                <div class="banner">
                    <img src="../../assets/img/logo.png" alt="" class="img-fluid logo" />
                    <h1>Hi, Welcome Back</h1>
                    <p class="discription">Start your journey as we find the best doctor for you.</p>

                    <p class="mobile-signin">Sign In</p>
                    <div class="sign-in-google">
                    <button class="btn"> <img src="../../assets/img/icons/google.png" class="google mr-3" alt="">Sign in with Google</button>
                    </div>
                    <p class="divider">or</p>
                </div>

                <form class="signin-form">
                    <label for="">Email address</label>
                    <div class="input-field">
                    <img src="../../assets/img/icons/EnvelopeSimple.png" alt="" class="" >
                    <input type="text" placeholder="Email Address" v-model="authData.email">
                    </div>

                    <label for="">Password</label>
                    <div class="input-field">
                    <img src="../../assets/img/icons/Lock.png" alt="" class="">
                    <input type="text" placeholder="Enter your password" v-model="authData.password">
                    </div>

                    <div class="forget-password">
                    <div class="check">
                        <input type="checkbox" name="" id="remember_me">
                        <label for="remember_me">Remember me</label>
                    </div>
                    <div>
                        <router-link to="/forget-password"><h3>Forget Password?</h3></router-link>
                        <router-link to="/"><h3>Home</h3></router-link>
                        <!-- Forget Password? -->
                    </div>
                    </div>
                    <button class="btn sign-up" @click.prevent="handleLogin()" :disabled = "getStatus">Sign in</button>
                </form>
                
                <p class="mobile__divider">or</p>

                <div class="sign-in-google mobile-sign-in-google">
                    <button class="btn"> <img src="../../assets/img/icons/google.png" class="google mr-3" alt="">Sign in with Google</button>
                </div>

                <div class="account">
                    <p> <span>Not registered yet?</span><router-link to="/register">Create an Account</router-link></p>
                </div>

                <div class="terms">
                    <div class="copy">
                    &copy; 2021 SDG ALL rights reserved.
                    </div>
                    <div class="privacy">
                    Terms of Service. Privacy Policy
                    </div>
                </div>

            </div>
                <!-- =============== End Form =============== -->
        </div>
    </div>
</template>

<script>
import * as types from '../../store/types'
import { mapGetters } from 'vuex';

export default {
  name: 'Login',
  data () {
        return {
            authData : {
                email: "",
                password: "",
            }
        }
    },
    computed : {
        ...mapGetters({
            getStatus : types.AUTH_STATE
        })
    },
    methods : {
        handleLogin() {
            const formData = {
                email: this.authData.email,
                password: this.authData.password,
            }
            this.$store.dispatch(types.LOGIN_ACTION , formData);
        }
    }
}
</script>

<style>
</style>