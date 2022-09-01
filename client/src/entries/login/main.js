import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);

import axios from '../../plugins/axios'
import router from '../../router/login/index.js';

app.config.globalProperties.$axios = axios


app.use(router)
app.mount('#app');
