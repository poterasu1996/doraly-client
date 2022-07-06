import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { plugin, defaultConfig } from '@formkit/vue';
import Paginate from "vuejs-paginate-next";
import '@formkit/themes/genesis'

createApp(App)
    .use(router)
    .use(plugin, defaultConfig)
    .use(Paginate)
    .mount('#app')
