import Homepage from '../screens/Homepage.vue';
import Register from '../screens/auth/Register.vue';
import Login from '../screens/auth/Login.vue';
import Forget from '../screens/auth/forget-pass.vue';
import ResetPassword from '../screens/auth/ResetPassword';

// import Dashboard from '../screens/dashboard/Dashboard.vue';
import DashThree from '../screens/DashThree.vue';
import DashOne from '../screens/DashOne.vue';

import { createRouter, createWebHistory } from 'vue-router'

const Dashboard = () => import('../screens/dashboard/Dashboard.vue');  //lazy loading
const medhouse_patients = (to, from, next) => {
    const loggedIn = localStorage.getItem('token')
    if(!loggedIn) next({name:'Login'})
    else next()
}

const medhouse_guest = (to, from, next) => {
    const loggedIn = localStorage.getItem('token')
    if(loggedIn) next({name:'Dashboard'})
    else next()
}


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Homepage
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        beforeEnter:medhouse_guest
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        beforeEnter:medhouse_guest
    },
    {
        path: '/forget-password',
        name: 'ForgetPassword',
        component: Forget,
        beforeEnter:medhouse_guest
    },
    {
        path: '/reset-password/:token',
        name: 'ResetPassword',
        component: ResetPassword,
        beforeEnter:medhouse_guest
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashOne,
        beforeEnter : medhouse_patients
    },
    // {
    //     path: '/doctors',
    //     name: 'doctors',
    //     component: Doctor,
    //     children : [
    //         {
    //             path : ':id/details'
    //         },
    //     ]
    // },
    // {
    //     path: '/appointments',
    //     name: 'appointments',
    //     component: Appointment,
    //     children : [
    //         {
    //             path : ':id'
    //         },
    //     ]
    // },
    {
        path: '/:catchAll(.*)',
        redirect : "/",
    },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router