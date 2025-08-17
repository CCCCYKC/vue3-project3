import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
    {
        path: '/',
        name: 'Layout',
        component: () => import('../views/Layout/Layout.vue'),
        children: [
            {
                path: '/',
                meta: {
                    name: '首页',
                    icon: 'Platform',
                    realPath:'/'
                },
                component: () => import('../views/Home/Home.vue')
            },
            {
                path: '/auth',
                meta: {
                    icon: 'Lock',
                    name: '权限管理'
                },
                component: () => import('../views/Auth/Auth.vue'),
                children: [
                    {
                        path: 'admin',
                        meta: {
                            icon: 'User',
                            name: '账号管理',
                            realPath:'/auth/admin'
                        },
                        component: () => import('../views/Auth/Admin/Admin.vue')
                    },
                    {
                        path: 'group',
                        meta: {
                            icon: 'Menu',
                            name: '菜单管理',
                            realPath:'/auth/group'
                        },
                        component: () => import('../views/Auth/Group/Group.vue')
                    }
                ]
            },
            {
                path: '/normal',
                meta: {
                    icon: 'Bell',
                    name: 'DIDI陪诊',
                },
                component: () => import('../views/Nomal/Normal.vue'),
                children: [
                    {
                        path: 'satff',
                        meta: {
                            icon: 'Avatar',
                            name: '陪护管理',
                            realPath:'/normal/satff'
                        },
                        component: () => import('../views/Nomal/Staff/Staff.vue')
                    },
                    {
                        path: 'order',
                        meta: {
                            icon: 'List',
                            name: '订单管理',
                            realPath:'/normal/order'
                        },
                        component: () => import('../views/Nomal/Order/Order.vue')
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login/login.vue')
    }
]
const router = createRouter({
    // 路由数据
    routes,
    // 路由匹配模式
    history: createWebHashHistory()
});
export default router;