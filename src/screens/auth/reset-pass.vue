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
                        <input type="text" placeholder="Confirm your password">
                    </div>
                    <button class="btn sign-up" >Submit</button>
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
    export default {
        name: 'Reset',
        data () {
            return {
                authData : {
                    email: "",
                    password : "",
                    confirm_password : "",
                    token : ""
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