import Homepage from '../screens/Homepage.vue';
import Register from '../screens/auth/Register.vue';
import Signin from '../screens/auth/signin.vue';
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