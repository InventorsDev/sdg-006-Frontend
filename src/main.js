import { createApp, Vue } from 'vue'
import App from './App.vue'
import './assets/css/bootstrap.min.css'
import './assets/css/mdb.min.css'
import './assets/css/style.css'
import './assets/css/fontawesome-free-5.15.1-web/css/all.min.css'

import router from './router'

createApp(App).use(router).mount('#app')
