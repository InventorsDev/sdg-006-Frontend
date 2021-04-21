import { createApp } from 'vue'
import App from './App.vue'
import store from "./store/store"
import './assets/css/bootstrap.min.css'
import './assets/css/mdb.min.css'
import './assets/css/style.css'
import './assets/css/fontawesome-free-5.15.1-web/css/all.min.css'
import 'es6-promise/auto'

import router from './router'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
