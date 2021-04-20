import Homepage from '../screens/Homepage.vue';
import Register from '../screens/auth/Register.vue';

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
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router