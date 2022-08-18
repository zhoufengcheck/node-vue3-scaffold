import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);

import axios from './plugins/axios'
import elementConponents from './plugins/element';
import router from './router/index';

app.config.globalProperties.$axios = axios
elementConponents.forEach(item=>{
    app.use(item)
})

app.use(router)
app.mount('#app');
