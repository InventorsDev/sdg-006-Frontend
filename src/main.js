import { createApp } from 'vue'
import App from './App.vue'
import store from "./store/store"
import './assets/css/bootstrap.min.css'
import './assets/css/mdb.min.css'
import './assets/css/style.css'
import './assets/css/fontawesome-free-5.15.1-web/css/all.min.css'
import 'es6-promise/auto'
import axios from 'axios';
// import './assets/css/dashstyle.css'

import router from './router'
axios.defaults.baseURL = 'http://medhouse.herokuapp.com/api/v1'
axios.defaults.headers.common['medhouse'] = 'medhouse'

axios.interceptors.request.use(config => {
    console.log(config)
    return config
})

axios.interceptors.response.use(res => {
    console.log(res)
    return res
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
