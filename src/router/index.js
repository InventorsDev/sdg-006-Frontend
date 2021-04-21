import Homepage from '../screens/Homepage.vue';
import Register from '../screens/auth/Register.vue';
import Login from '../screens/auth/Login.vue';
import Forget from '../screens/auth/forget-pass.vue';

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Homepage
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/forget-password',
        name: 'ForgetPassword',
        component: Forget
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router