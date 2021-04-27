<template>
    <div>
        <DashNavbar/>
        <!-- <router-view/> -->
        <div class="sideBarWrapper">
            <div class="dashII__scroll dashII__left">
                <h1>Doctors</h1>

                <div class="dashII__form" >
                    <form action="">
                        <img src="../../assets/img/icons/search.png" alt="" class="search__icon">
                        <input type="text" placeholder="Find doctor" class="mr-3">
                        <div class="filter">
                            <img src="../../assets/img/dashboard/icons/Filter.png" alt="">
                        </div>
                    </form>
                </div>

                <div class="expert__online">
                    <div class="active__expert">
                        <img src="../../assets/img/dashboard/online-doc/1.png" alt="">
                        <img src="../../assets/img/dashboard/icons/online-icon.png" alt=""  class="online">
                    </div>
                    
                    <div class="active__expert">
                        <img src="../../assets/img/dashboard/online-doc/2.png" alt="">
                        <img src="../../assets/img/dashboard/icons/online-icon.png" alt=""  class="online">
                    </div>

                    <div class="active__expert">
                        <img src="../../assets/img/dashboard/online-doc/3.png" alt="">
                        <img src="../../assets/img/dashboard/icons/online-icon.png" alt=""  class="online">
                    </div>

                    <div class="active__expert">
                        <img src="../../assets/img/dashboard/online-doc/4.png" alt="">
                        <img src="../../assets/img/dashboard/icons/online-icon.png" alt=""  class="online">
                    </div>

                    <div class="active__expert">
                        <img src="../../assets/img/dashboard/online-doc/5.png" alt="">
                        <img src="../../assets/img/dashboard/icons/online-icon.png" alt=""  class="online">
                    </div>

                    <div class="active__expert">
                        <img src="../../assets/img/dashboard/online-doc/6.png" alt="">
                        <img src="../../assets/img/dashboard/icons/online-icon.png" alt=""  class="online">
                    </div>

                    <div class="active__expert">
                        <img src="../../assets/img/dashboard/online-doc/7.png" alt="">
                        <img src="../../assets/img/dashboard/icons/online-icon.png" alt=""  class="online">
                    </div>

                    <div class="active__expert">
                        <img src="../../assets/img/dashboard/online-doc/8.png" alt="">
                        <img src="../../assets/img/dashboard/icons/online-icon.png" alt=""  class="online">
                    </div>

                    <div class="active__expert">
                        <img src="../../assets/img/dashboard/online-doc/9.png" alt="">
                        <img src="../../assets/img/dashboard/icons/online-icon.png" alt=""  class="online">
                    </div>

                    <div class="active__expert" style="background-color: black;">
                    </div>
                </div>

                <div class="popular pb-5">
                    <h1>Popular</h1>
                    <div class="popular__list">
                        <div class="popular__card">
                            <div class="popular__card__image">
                                <img src="../../assets/img/dashboard/popular/5.png" alt="" class="img-fluid">
                            </div>
                            <div class="popular__card__body">
                                <h1 class="pt-2">dr. opeoluwa ogumodede</h1>
                                <span>heart surgeon</span>
                                <p class="pt-2 pr-5 pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                                <div class="popular__card__reviews ">
                                    <img src="../../assets/img/dashboard/icons/Star.png" alt="">
                                    <p>460 Reviews (5.0)</p>
                                </div>
                            </div>  
                        </div>

                        <div class="popular__card">
                            <div class="popular__card__image">
                                <img src="../../assets/img/dashboard/popular/2.png" alt="" class="img-fluid">
                            </div>
                            <div class="popular__card__body">
                                <h1 class="pt-2">Dr. Guy Hawkins</h1>
                                <span>heart surgeon</span>
                                <p class="pt-2 pr-5 pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                                <div class="popular__card__reviews">
                                    <img src="../../assets/img/dashboard/icons/Star.png" alt="">
                                    <p>460 Reviews (5.0)</p>
                                </div>
                            </div>  
                        </div>

                        <div class="popular__card">
                            <div class="popular__card__image">
                                <img src="../../assets/img/dashboard/popular/6.png" alt="" class="img-fluid">
                            </div>
                            <div class="popular__card__body">
                                <h1 class="pt-2">Dr. Brooklyn Simmons</h1>
                                <span>heart surgeon</span>
                                <p class="pt-2 pr-5 pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                                <div class="popular__card__reviews">
                                    <img src="../../assets/img/dashboard/icons/Star.png" alt="">
                                    <p>460 Reviews (5.0)</p>
                                </div>
                            </div>  
                        </div>

                        <div class="popular__card">
                            <div class="popular__card__image">
                                <img src="../../assets/img/dashboard/popular/4.png" alt="" class="img-fluid">
                            </div>
                            <div class="popular__card__body">
                                <h1 class="pt-2">Dr. Leslie Alexander</h1>
                                <span>heart surgeon</span>
                                <p class="pt-2 pr-5 pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                                <div class="popular__card__reviews">
                                    <img src="../../assets/img/dashboard/icons/Star.png" alt="">
                                    <p>460 Reviews (5.0)</p>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div class="load__expert  mt-4 mr-4">
                        See All >>
                    </div>            
                </div>
                <div class="popular" style="padding-bottom: 10rem;">
                    <h1>Doctors You May Like</h1>
                    <div class="popular__list">
                        <div class="popular__card">
                            <div class="popular__card__image">
                                <img src="../../assets/img/dashboard/popular/1a.png" alt="" class="img-fluid">
                            </div>
                            <div class="popular__card__body">
                                <h1 class="pt-2">Dr. Dianne Russell</h1>
                                <span>heart surgeon</span>
                                <p class="pt-2 pr-5 pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                                <div class="popular__card__reviews">
                                    <img src="../../assets/img/dashboard/icons/Star.png" alt="">
                                    <p>460 Reviews (5.0)</p>
                                </div>
                            </div>  
                        </div>

                        <div class="popular__card">
                            <div class="popular__card__image">
                                <img src="../../assets/img/dashboard/popular/2a.png" alt="" class="img-fluid">
                            </div>
                            <div class="popular__card__body">
                                <h1 class="pt-2">Dr. Eleanor Pena</h1>
                                <span>heart surgeon</span>
                                <p class="pt-2 pr-5 pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                                <div class="popular__card__reviews">
                                    <img src="../../assets/img/dashboard/icons/Star.png" alt="">
                                    <p>460 Reviews (5.0)</p>
                                </div>
                            </div>  
                        </div>

                        <div class="popular__card">
                            <div class="popular__card__image">
                                <img src="../../assets/img/dashboard/popular/3a.png" alt="" class="img-fluid">
                            </div>
                            <div class="popular__card__body">
                                <h1 class="pt-2">Dr. Marvin McKinney</h1>
                                <span>heart surgeon</span>
                                <p class="pt-2 pr-5 pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                                <div class="popular__card__reviews">
                                    <img src="../../assets/img/dashboard/icons/Star.png" alt="">
                                    <p>460 Reviews (5.0)</p>
                                </div>
                            </div>  
                        </div>

                        <div class="popular__card">
                            <div class="popular__card__image">
                                <img src="../../assets/img/dashboard/popular/4a.png" alt="" class="img-fluid">
                            </div>
                            <div class="popular__card__body">
                                <h1 class="pt-2">Dr. Arlene McCoy</h1>
                                <span>heart surgeon</span>
                                <p class="pt-2 pr-5 pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                                <div class="popular__card__reviews">
                                    <img src="../../assets/img/dashboard/icons/Star.png" alt="">
                                    <p>460 Reviews (5.0)</p>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div class="load__expert  mt-4 mr-4">
                        See All >>
                    </div>
                </div>
                
            </div>
    
            <div class="dashII__scroll dashII__right no__line pt-2">
                <div class="">
                    <div class="notifications_container">
                        <div class="notification_picture mr-2">
                            <img src="../../assets/img/dashboard/expert1.png" alt="">
                        </div>
                        <div class="notify__box notification_alarm">
                            <img src="../../assets/img/dashboard/icons/Notification.png" alt="" class="mr-2">
                            <img src="../../assets/img/dashboard/icons/notify.png" alt="" class="nofity_me">
                        </div>
                    </div>
                    <div class="mt-5 mb-5">
                        <img src="../../assets/img/dashboard/dashii-right.png" alt="">
                    </div>
                     <div class="logout">
                        <a href="#">
                            <p class="mr-2">Log Out</p>
                            <img src="../..//assets/img/dashboard/icons/Logout.png" alt="" class="mr-3">
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div> 
</template>

<script>
import DashNavbar from '../../components/dashboard/DashNavbar.vue'

export default {
    name: 'Dashboard',
    components: {
        DashNavbar,
        }
        }
</script>