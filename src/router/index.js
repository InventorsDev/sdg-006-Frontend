import Homepage from '../screens/Homepage.vue';
import Register from '../screens/auth/Register.vue';
import Signin from '../screens/auth/signin.vue';
import Forget from '../screens/auth/forget-pass.vue';
import DashTwo from '../screens/DashTwo.vue';
import DashOne from '../screens/DashOne.vue';

import { createRouter, createWebHistory } from 'vue-router'


const Dashboard = () => import('../screens/dashboard/Dashboard.vue');  //lazy loading
const medhouse_patients = (to, from, next) => {
    const loggedIn = localStorage.getItem('token')
    if(!loggedIn) next({name:'Login'}) //qwe
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
        path: '/',
        name: 'DashOne',
        component: DashOne
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/signin',
        name: 'Signin',
        component: Signin
    },
    {
        path: '/forget',
        name: 'Forget',
        component: Forget
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router