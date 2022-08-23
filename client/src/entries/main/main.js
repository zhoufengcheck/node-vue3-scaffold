import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);

import axios from '../../plugins/axios'
import elementConponents from '../../plugins/element';
import router from '../../router/main/index.js';
import Access from '../../directive/Access.js';
import store from '../../store/index.js';


app.directive('access', Access)

app.config.globalProperties.$axios = axios
elementConponents.forEach(item=>{
    app.use(item)
})
app.config.errorHandler = (err, instance, info) => {
    console.log(err,instance,info)
}
app.use(router);
app.use(store)
app.mount('#app');
