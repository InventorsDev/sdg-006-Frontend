<template>
    <div>
        <!-- ============ Right Side Image ============== -->
        <img src="../../assets/img/sigin.png" alt="" class="wave">
        <img src="../../assets/img/doctor.png" alt="" class="wave">
        <!-- ============== End of Right side Image =============== -->

        <!-- =========== Form  =================-->
        <div class="container">
            <div class="form-container">
                <div class="banner">
                    <img src="../../assets/img/logo.png" alt="" class="img-fluid logo">
                    <h1>Reset Password</h1>
                    <p>Please enter your email address and we'll send you a link to reset your password.</p>
                </div>

                <form class="signin-form">
                    <label for="">Email address</label>
                    <div class="input-field">
                    <img src="../../assets/img/icons/EnvelopeSimple.png" alt="" class="fa-envelope">
                    <input type="text" placeholder="Email Address" v-model="authData.email">
                    </div>
                    <button class="btn sign-up" :disabled = "getStatus" @click="handleForgotPassword()">Submit</button>
                </form>

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

            <div class="form-image">
            <!-- <div class="overlay"> -->
                <!-- <img src="img/shutterstock_1720389688 1.png" alt=""> -->
            <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import * as types from '../../store/types'
import { mapGetters } from 'vuex';

    export default {
        name: 'Forget',
        data () {
            return {
                authData : {
                    email: "",
                }
            }
        },
        computed : {
            ...mapGetters({
                getStatus : types.AUTH_STATE
            })
        },
        methods : {
            handleForgotPassword() {
                const formData = {
                    email: this.authData.email,
                }
                this.$store.dispatch(types.FORGOT_PASSWORD_ACTION , formData);
            }
        }
    }
</script>

<style>
</style>