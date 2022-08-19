import {createRouter,createWebHashHistory} from 'vue-router';
const List = ()=>import('../../views/main/List.vue');
const Detail = ()=>import('../../views/main/Detail.vue')
const Home = ()=>import('../../views/main/Home.vue')
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