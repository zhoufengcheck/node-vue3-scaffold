import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);

import axios from '../../plugins/axios'
import router from '../../router/main/index.js';
import Access from '../../directive/Access.js';
import store from '../../store/index.js';


app.directive('access', Access)
app.config.globalProperties.$axios = axios
app.config.errorHandler = (err, instance, info) => {
    console.log(err,instance,info)
}
app.use(router);
app.use(store)
app.mount('#app');
