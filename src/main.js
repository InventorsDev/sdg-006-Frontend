import { createApp, Vue } from 'vue'
import App from './App.vue'
import './assets/css/style.css'
import router from './router'

createApp(App).use(router).mount('#app')
