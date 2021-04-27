<template>
    <div>
        <DashNavbar/>
        <div class="sideBarWrapper">
            <div class="dashII__scroll dashIII__left">
                <div class="dashIII__container">
                    <h1 class="mb-4">Profile</h1>
                    <div class="dashIII__profile__picture">
                        <img src="../assets/img/dashboard/doctor-pic/ope.png" alt="" class="img-fluid">
                    </div>
                </div>
            </div>

            <div class="dashII__scroll dashIII__center">
                <div class="dashIII__container">
                    <div class="profile__name">
                        <div class="name">
                            <h1>Dr. Opeoluwa Ogunmodede</h1>
                            <i class="fas fa-heart"></i>
                        </div>
                        <p class="discipline">Heart Surgeon</p>
                        <div class="lang pt-2">
                            <img src="../assets/img/dashboard/icons/comments-alt.png" alt="">
                            <p>English, Igbo, Pigin</p>
                        </div>
                    </div>
                    <div class="doc__check">
                        <div class="doc__toggle">
                            <button class="btn btn-active">Profile</button>
                            <button class="btn">Bookings</button>
                            <button class="btn">Payment</button>
                        </div>
                    </div>
                    <div class="profile__dashboard">
                        <h3 class="title__coupon">Reedeem Coupon</h3>     
                        <div class="box">
                            <form action="">
                                <input type="text" placeholder="Coupon code">
                                <input type="submit" name="" value="Apply">
                            </form>
                        </div> 
                        <div class="d-flex flex-row align-items-center mt-4 mb-3">
                            <img src="../assets/img/dashboard/icons/payment.png" alt="" class="mr-2">
                            <span>Payment Details</span>
                        </div> 
                        <div class="payment__container" style="width:90%; border-radius: 10px !important;">
                            <table class="content-table table table-hover">
                                <tbody>
                                    <tr>
                                    <th colspan="2">Charge</th>
                                    <td colspan="2" style="text-align: right;">₦4,000.00</td>
                                    </tr>
                                    <tr>
                                    <th colspan="2">Total</th>
                                    <td colspan="2" style="text-align: right;">₦5,500.00</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2">Wallet Balance</th>
                                        <td colspan="2" style="text-align: right;">₦25,000.00</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <p class="wallet">Your wallet will be debited for this transaction</p>
                    </div>
                    <button class="btn ml-4"> Pay</button>
                </div>
            </div>

            <!-- <div class="dashII__scroll dashIII__center">
            <div class="dashIII__container">
                <div class="profile__name">
                    <div class="name">
                        <h1>Dr. Opeoluwa Ogunmodede</h1>
                        <i class="fas fa-heart"></i>
                    </div>
                    <p class="discipline">Heart Surgeon</p>
                    <div class="lang pt-2">
                        <img src="../assets/img/dashboard/icons/comments-alt.png" alt="">
                        <p>English, Igbo, Pigin</p>
                    </div>
                </div>
                <div class="doc__check">
                    <div class="doc__toggle">
                        <button class="btn active">Profile</button>
                        <button class="btn">Bookings</button>
                        <button class="btn">Payment</button>
                    </div>
                </div>

                <div class="profile__dashboard"> 
                    <div class="profile__expyrs">
                        <div class="exp">
                            <p>Patients</p>
                            <div class="yrs" >
                                <h1 class="patient mr-1">500</h1>
                                <i class="patient fas fa-plus"></i>
                            </div>
                        </div>
                        <div class="exp">
                            <p>Experience</p>
                            <div class="yrs">
                                <h1 class="experience mr-1">10yrs</h1>
                                <i class="experience fas fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div class="rating">
                        <img src="../assets/img/dashboard/Star.png" alt="" class="mr-1">
                        <p>460 Reviews (5.0)</p>
                    </div>
                    <div class="exp__container">
                        <div class="exp">
                            <div class="exp__type">
                                <img src="../assets/img/dashboard/icons/hosiptal.png" alt="">
                                <span>Affilated Hospital</span>
                            </div>
                            <p>Reddington Hospital</p>
                        </div>
                    </div>
                    <div class="exp__container">
                        <div class="exp">
                            <div class="exp__type">
                                <img src="../assets/img/dashboard/icons/time.png" alt="">
                                <span>Next Available</span>
                            </div>
                            <p>3:30pm, today</p>
                        </div>
                    </div>
                    <div class="exp__container">
                        <div class="exp">
                            <div class="exp__type">
                                <img src="../assets/img/dashboard/icons/rate.png" alt="">
                                <span>Rates</span>
                            </div>
                            <p>₦1500 / 30 mins</p>
                        </div>
                    </div>
                    <div class="exp__container">
                        <div class="exp">
                            <div class="exp__type">
                                <img src="../assets/img/dashboard/icons/hosiptal.png" alt="">
                                <span>Location</span>
                            </div>
                            <p>Lagos, NG</p>
                        </div>
                    </div>
                </div>

                <div class="bio">
                    <h3>Bio</h3>
                    <p>
                        Dr. Bassey is an orthopedic surgeon who believes that patient care should be a physician's first priority. He specializes in laparoscopic procedures that minimize... <span>Read more</span>
                    </p>
                </div>
                <button class="btn ml-4"> Book Appointment</button>
            </div>
        </div> -->
    
            <div class="dashII__scroll dashIII__right no__line">
                <div class="">
                    <div class="notifications_container">
                        <div class="notification_picture mr-2">
                            <img src="../assets/img/dashboard/expert1.png" alt="">
                        </div>
                        <div class="notify__box notification_alarm">
                            <img src="../assets/img/dashboard/icons/Notification.png" alt="" class="">
                            <img src="../assets/img/dashboard/icons/notify.png" alt="" class="nofity_me">
                        </div>
                    </div>
                    <div class="">
                        <img src="../assets/img/dashboard/dashii-right.png" alt="">
                    </div>
                    <div class="logout">
                        <a href="#">
                            <p class="mr-2">Log Out</p>
                            <img src="../assets/img/dashboard/icons/Logout.png" alt="" class="mr-3">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DashNavbar from '../components/DashNavbar';


export default {
    name: "DashThree",
     components: {
        DashNavbar,
    },
    mounted() {
          const btnLink = document.querySelectorAll('.btn')

            function btnAction(){
                btnLink.forEach(n => n.classList.remove('btn-active'))
                this.classList.add('btn-active')
            }

            btnLink.forEach(n => n.addEventListener('click', btnAction))

    },
}
</script>

<style>

</style>