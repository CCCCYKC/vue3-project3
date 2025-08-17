import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: '/',
        name: 'Layout',
        component: () => import('../views/Layout/Layout.vue'),
        children: [
            {
                path: '/',
                name: 'Home',
                component: () => import('../views/Home/Home.vue')
            }
        ]
    },
    {
        path:'/login',
        name:'Login',
        component:() => import('../views/Login/login.vue')
    }
]
const router = createRouter({
    routes,
    history: createWebHistory()
});
export default router;