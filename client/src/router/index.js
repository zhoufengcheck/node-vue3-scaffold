import {createRouter,createWebHashHistory} from 'vue-router';
const List = ()=>import('../views/List.vue');
const Detail = ()=>import('../views/Detail.vue')
const Home = ()=>import('../views/Home.vue')
const routes = [
    // { path: '/', component: Home },
    { 
        path: '/home', component: Home,
        meta: {
            keepAlive:true
        }
    },
    { path: '/detail', component: Detail },
    { path: '/list', component: List },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
export default router