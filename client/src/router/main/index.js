import {createRouter,createWebHashHistory} from 'vue-router';
const List = ()=>import('../../views/main/List.vue');
// const DetailCom = ()=>import('../../views/main/Detail.vue')
const Home = ()=>import('../../views/main/Home.vue')
const routes = [
    { 
        path: '/home', component: Home,
        meta: {
            keepAlive:true
        }
    },
    // { path: '/detail', component: DetailCom },
    { path: '/list', component: List },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
router.beforeEach((to, from, next) => {
    // ...
    next()
})


export default router