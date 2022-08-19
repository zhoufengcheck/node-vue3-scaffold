import {createRouter,createWebHashHistory} from 'vue-router';
const Login = ()=>import('../../views/login/Login.vue');

const routes = [
    { path: '/', component: Login },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
export default router