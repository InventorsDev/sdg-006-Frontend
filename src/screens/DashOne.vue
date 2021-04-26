<template>
    <div>
        <DashNavbar/>

        <div class="patient__name">
            <h1>Hello<span>, Opeoluwa!</span></h1>
        </div>

        <div class="sideBarWrapper">
            <div class="sideBar sideBar__left">
                <div class="">
                    <img src="../assets/img/dashboard/1.png" alt="">
                    <div class="new__appointment">
                        <div class="add">
                            <img src="../assets/img/dashboard/icons/+.png" alt="">
                        </div> 
                        <h3>New<br/>Appointment</h3>
                    </div>
                </div>
            </div>
            <div class="sideBar sideBar__center">
                <div>
                    <h2 class="mb-4">Upcoming Activities</h2>
                    <div class="expert">
                        <div class="expert__details offline mr-4">
                            <div class="doc doc__title">
                                <img src="../assets/img/dashboard/expert2.png" alt="" class="mr-3">
                                <div class="">
                                    <h3>Dr. Opeyemi Ajayi</h3>
                                    <p>Heart Surgeon, Lagos, Nigeria</p>
                                </div>
                            </div>
                            <div class="doc ">
                                <h3>Surgeon</h3>
                                <p>Heart Surgeon</p>
                            </div>
                            <div class="doc doc__date">
                                <div class="date">
                                    <p>Date</p>
                                    <h3>3 April 2021</h3>
                                </div>
                                <div class="time">
                                    <p>Time</p>
                                    <h3>10:00 AM</h3>
                                </div>
                            </div>
                            <div class="doc doc__action">
                                <div class="appointment">
                                    <button class="btn btn-offline">Appointment</button> 
                                </div>
                                <div class="chat">
                                    <img src="../assets/img/dashboard/icons/Chat.png" alt="">
                                </div>
                                <div class="chat">
                                    <img src="../assets/img/dashboard/icons/Video.png" alt="">
                                </div>
                            </div>
                            <div class="current-offline">
                            </div>
                        </div>
                        
                        <div class="expert__details">
                            <div class="doc doc__title">
                                <img src="../assets/img/dashboard/expert1.png" alt="" class="mr-3">
                                <div class="">
                                    <h3>Dr. Esther Omobolale</h3>
                                    <p>Heart Surgeon, Lagos, Nigeria</p>
                                </div>
                            </div>
                            <div class="doc ">
                                <h3>Medicine</h3>
                                <p>Specialist</p>
                            </div>
                            <div class="doc doc__date">
                                <div class="date">
                                    <p>Date</p>
                                    <h3>4 April 2021</h3>
                                </div>
                                <div class="time">
                                    <p>Time</p>
                                    <h3>10:00 AM</h3>
                                </div>
                            </div>
                            <div class="doc doc__action">
                                <div class="appointment">
                                    <button class="btn btn-online">Appointment</button> 
                                </div>
                                <div class="chat">
                                    <img src="../assets/img/dashboard/icons/Chat.png" alt="">
                                </div>
                                <div class="chat">
                                    <img src="../assets/img/dashboard/icons/Video.png" alt="">
                                </div>
                            </div>
                            <div class="current-online">

                            </div>
                        </div>
                    </div>

                    <div class="load__expert mb-4 mt-4 pr-1">
                        Older >>
                    </div>

                    <div class="prescribe">
                        <p class="mb-4">Prescription</p>
                        <div class="p__container">
                            <div class="p__wrapper p__new">
                                <div class="pre p__prescribed">
                                    <h3>Paracetamol</h3>
                                    <p>Last prescribed 04 April, 2020</p>
                                </div>
                                <div class="pre p__active">
                                    <h3 class="mr-2">04</h3>
                                    <p>Active Prescription</p>
                                </div>
                    
                                <div class="pre p__refuel">
                                    <h3 class="mr-2">0</h3>
                                    <p>Refuel Request</p>
                                </div>
                            </div>
                            <div class="p__wrapper p__old">
                                <div class="pre p__prescribed">
                                    <h3>Paracetamol</h3>
                                    <p>Last prescribed 04 April, 2020</p>
                                </div>
                                <div class="pre p__active">
                                    <h3 class="mr-2">04</h3>
                                    <p>Active Prescription</p>
                                </div>
                    
                                <div class="pre p__refuel">
                                    <h3 class="mr-2">0</h3>
                                    <p>Refuel Request</p>
                                </div>
                            </div>
                            <div class="p__wrapper p__old">
                                <div class="pre p__prescribed">
                                    <h3>Paracetamol</h3>
                                    <p>Last prescribed 04 April, 2020</p>
                                </div>
                                <div class="pre p__active">
                                    <h3 class="mr-2">04</h3>
                                    <p>Active Prescription</p>
                                </div>
                    
                                <div class="pre p__refuel">
                                    <h3 class="mr-2">0</h3>
                                    <p>Refuel Request</p>
                                </div>
                            </div>
                            <div class="p__wrapper p__old">
                                <div class="pre p__prescribed">
                                    <h3>Paracetamol</h3>
                                    <p>Last prescribed 04 April, 2020</p>
                                </div>
                                <div class="pre p__active">
                                    <h3 class="mr-2">04</h3>
                                    <p>Active Prescription</p>
                                </div>
                    
                                <div class="pre p__refuel">
                                    <h3 class="mr-2">0</h3>
                                    <p>Refuel Request</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sideBar sideBar__right no__line">
                <div class="dashI">
                    <div class="notifications_container">
                        <div class="notification_picture mr-2">
                            <img src="../assets/img/dashboard/expert1.png" alt="">
                        </div>
                        <div class="notify__box notification_alarm">
                            <img src="../assets/img/dashboard/icons/Notification.png" alt="">
                            <img src="../assets/img/dashboard/icons/notify.png" alt="" class="nofity_me">
                        </div>
                    </div>
                    <h2>My Doctors</h2>
                    <div class="my__doc sideBar no__line">
                        <div class="my-doc doc__action">
                            <div class="my-doc doc__title">
                                <img src="../assets/img/dashboard/expert2.png" alt="" class="mr-2">
                                <div class="">
                                    <h3>Dr. Esther Omobolale</h3>
                                    <p>Heart Surgeon, Lagos, Nigeria</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="chat mr-2">
                                    <img src="../assets/img/dashboard/icons/Chat.png" alt="">
                                </div>
                                <div class="chat">
                                    <img src="../assets/img/dashboard/icons/Video.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="my-doc doc__action">
                            <div class="my-doc doc__title">
                                <img src="../assets/img/dashboard/expert2.png" alt="" class="mr-2">
                                <div class="">
                                    <h3>Jane Coper</h3>
                                    <p>Medical Assistant</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="chat mr-2">
                                    <img src="../assets/img/dashboard/icons/Chat.png" alt="">
                                </div>
                                <div class="chat">
                                    <img src="../assets/img/dashboard/icons/Video.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="my-doc doc__action">
                            <div class="my-doc doc__title">
                                <img src="../assets/img/dashboard/expert2.png" alt="" class="mr-2">
                                <div class="">
                                    <h3>Eleanor Pena</h3>
                                    <p>Heart Surgeon, Lagos, Nigeria</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="chat mr-2">
                                    <img src="../assets/img/dashboard/icons/Chat.png" alt="">
                                </div>
                                <div class="chat">
                                    <img src="../assets/img/dashboard/icons/Video.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="my-doc doc__action">
                            <div class="my-doc doc__title">
                                <img src="../assets/img/dashboard/expert2.png" alt="" class="mr-2">
                                <div class="">
                                    <h3>Ola Abiodun</h3>
                                    <p>Heart Surgeon, Lagos, Nigeria</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="chat mr-2">
                                    <img src="../assets/img/dashboard/icons/Chat.png" alt="">
                                </div>
                                <div class="chat">
                                    <img src="../assets/img/dashboard/icons/Video.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="my-doc doc__action">
                            <div class="my-doc doc__title">
                                <img src="../assets/img/dashboard/expert2.png" alt="" class="mr-2">
                                <div class="">
                                    <h3>Ogunde Ope</h3>
                                    <p>Heart Surgeon, Lagos, Nigeria</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="chat mr-2">
                                    <img src="../assets/img/dashboard/icons/Chat.png" alt="">
                                </div>
                                <div class="chat">
                                    <img src="../assets/img/dashboard/icons/Video.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="my-doc doc__action">
                            <div class="my-doc doc__title">
                                <img src="../assets/img/dashboard/expert2.png" alt="" class="mr-2">
                                <div class="">
                                    <h3>Chukudi joy</h3>
                                    <p>Heart Surgeon, Lagos, Nigeria</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="chat mr-2">
                                    <img src="../assets/img/dashboard/icons/Chat.png" alt="">
                                </div>
                                <div class="chat">
                                    <img src="../assets/img/dashboard/icons/Video.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>Active Activities</p>
                    <div class="calendar">              
                        <div class="header">
                            <a data-action="prev-month" href="javascript:void(0)" title="Previous Month"><img src="../assets/img/dashboard/icons/arrow_left.png" alt=""></a>
                            <div class="text" data-render="month-year"></div>
                            <a data-action="next-month" href="javascript:void(0)" title="Next Month"><img src="../assets/img/dashboard/icons/arrow_right.png" alt=""></a>
                        </div>
                        <div class="months" data-flow="left">
                            <div class="month month-a">
                                <div class="render render-a"></div>
                            </div>
                            <div class="month month-b">
                                <div class="render render-b"></div>
                            </div>
                        </div>
                        <div class="calender__action">
                            <p class="cancel" style="font-size: 14px; font-weight: 700; color: #333333;">Cancel</p>
                            <div class="done" style="display: flex; justify-content: center; align-items: center; width: 100px; height: 40px; background: #6C5DD3; border-radius: 5px; color: white;font-size: 14px;">
                                Done
                            </div>
                        </div>
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
    import DashNavbar from '../components/DashNavbar.vue'

    export default {
        name: "DashOne",
        components: {
            DashNavbar,
        }
    }
</script>
