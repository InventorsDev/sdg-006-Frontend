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
            <!-- <img src="img/logo.png" alt="" class="img-fluid logo" /> -->
            <!-- <h1>Hi, Welcome Back</h1>
            <p class="discription">Start your journey as we find the best doctor for you.</p> -->

            <p class="mobile-signin">Sign Up</p>

            <div class="sign-in-google mobile-sign-in-google">
                <button class="btn"> <img src="../../assets/img/google.png" class="google mr-3" alt="">Sign in with Google</button>
            </div>
            <div class="sign-in-google">
            <button class="btn"> <img src="../../assets/img/google.png" class="google mr-4" alt="">Sign in with Google</button>
            </div>
            <p class="mobile__divider">or</p>
            <p class="divider">or</p>
        </div>

        <form action="" class="signin-form">
            <label for="">First Name</label>
            <div class="input-field Name__boxShadow">
            <img src="../../assets/img/user.png" alt="" class="fa-envelope">
            <input type="text" placeholder="First Name" class="">
        </div>
        <label for="">Last Name</label>
            <div class="input-field  Name__boxShadow">
            <img src="../../assets/img/user.png" alt="" class="fa-envelope">
            <input type="text" placeholder="Last Name" class="">
            </div>
            <label for="">Email address</label>
            <div class="input-field">
            <img src="../../assets/img/EnvelopeSimple.png" alt="" class="fa-envelope">
            <input type="text" placeholder="Email Address">
            </div>

            <label for="">Password</label>
            <div class="input-field">
            <img src="../../assets/img/Lock.png" alt="" class="fa-lock">
            <input type="text" placeholder="Enter your password">
            </div>

            <label for="">Confirm Password</label>
            <div class="input-field">
            <img src="../../assets/img/Lock.png" alt="" class="fa-lock">
            <input type="text" placeholder="Confirm your password">
            </div>

            <div class="forget-password">
            <div class="check">
                <input type="checkbox" name="" id="remember_me">
                <label for="remember_me">Remember me</label>
            </div>
            <div>
                <router-link to="/forget-password"><h3>Forget Password?</h3></router-link>
            </div>
            </div>
            <button class="btn sign-up">Sign Up</button>

        </form>

        <div class="account">
            <p> <span>Already registered?</span><router-link to="/login">Sign in here</router-link></p>
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
        
        <div class="form-image">
        <!-- <div class="overlay">
        </div> -->
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Register',
}
</script>

<style>

</style>