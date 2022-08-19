import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);

import axios from '../../plugins/axios'
import elementConponents from '../../plugins/element';
import router from '../../router/login/index.js';

app.config.globalProperties.$axios = axios
elementConponents.forEach(item=>{
    app.use(item)
})

app.use(router)
app.mount('#app');
