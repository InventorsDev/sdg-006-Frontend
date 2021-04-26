<template>
    <div>
        <!-- ============ Right Side Image ============== -->
        <img src="../../assets/img/sigin.png" alt="" class="wave">
        <img src="../../assets/img/doctor.png" alt="" class="wave">
        <!-- ============== End of Right side Image =============== -->

        <!-- ========
        === Form  =================-->
        <div class="container">
            <div class="form-container">
                <div class="banner">
                    <img src="../../assets/img/logo.png" alt="" class="img-fluid logo">
                    <h1>Reset Password</h1>
                    <p>Please enter your new password and make sure your confirm this password, must be same.</p>
                </div>

                <form action="" class="signin-form">
                    <label for="">New Password</label>
                    <div class="input-field">
                        <img src="../../assets/img/Lock.png" alt="" class="fa-lock">
                        <input type="text" placeholder="Enter your password" v-model="authData.password">
                    </div>
                    <label for="">Confirm Password</label>
                    <div class="input-field">
                        <img src="../../assets/img/Lock.png" alt="" class="fa-lock">
                        <input type="text" placeholder="Confirm your password" v-model="authData.confirm_password">
                    </div>
                    <button class="btn sign-up" >Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
import * as types from '../../store/types'

    export default {
        name: 'ResetPassword',
        data () {
            return {
                authData : {
                    email: this.$route.query.email,
                    password : "",
                    confirm_password : "",
                    token : this.$route.params.token,
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
                    token: this.authData.token,
                    password : this.authData.password,
                    confirm_password : this.authData.confirm_password,
                }
                this.$store.dispatch(types.PASSWORD_RESET_ACTION , formData);
            }
        }
    }
</script>

<style scoped>

</style>