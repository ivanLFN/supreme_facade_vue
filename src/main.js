import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import VueEasyLightbox from 'vue-easy-lightbox'

const app = createApp(App)

app.use(router)
app.use(VueEasyLightbox)

app.config.globalProperties.$authenticationTime = 60

app.mount('#app')
