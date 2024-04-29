import {createRouter, createWebHistory} from 'vue-router'
import store from '@/store'

/* App */
const Main = () => import('@/components/App.vue')

/* Guest Components */
const Index = () => import('@/components/main/Index.vue')
const Items = () => import('@/components/main/Items.vue')
const Login = () => import('@/components/main/Login.vue')
const Register = () => import('@/components/main/Register.vue')

/* Profile */
const UserItems = () => import('@/components/profile/UserItems.vue')

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main,
        meta: {},
        children: [
            {
                path: '/',
                name: 'index',
                component: Index,
                meta: {
                    title: `Main`,
                    middleware: 'guest'
                }
            },
            {
                path: '/login',
                name: 'login',
                component: Login,
                meta: {
                    title: `Login`,
                    middleware: 'guest'
                }
            },
            {
                path: '/register',
                name: 'register',
                component: Register,
                meta: {
                    title: `Register`,
                    middleware: 'guest'
                }
            },
            {
                path: '/items',
                name: 'items',
                component: Items,
                meta: {
                    title: `Product List`,
                    middleware: 'guest'
                },
                children: [
                    {
                        name: 'items',
                        path: '/items/:service',
                        component: Items,
                        meta: {
                            title: `Product List 2`
                        }
                    },
                ]
            },
            {
                path: '/dashboard',
                name: 'dashboard',
                component: Index,
                meta: {
                    title: `Dashboard`,
                    middleware: 'admin'
                },
                beforeEnter: (to, from, next) => {
                    let isLogged = store.state.auth.authenticated,
                        userRole = isLogged && store.state.auth.user.role,
                        isAdmin = ['admin', 'super'].includes(userRole)

                    if (isLogged && isAdmin) {
                        return next()
                    }

                    next({name: 'index'})
                },
            },
            {
                path: '/profile',
                name: 'profile',
                component: Index,
                meta: {
                    middleware: 'auth'
                },
                beforeEnter: (to, from, next) => {
                    if (store.state.auth.authenticated) {
                        return next()
                    }

                    next({name: 'index'})
                },
                children: [
                    {
                        name: 'userItems',
                        path: '/profile/items',
                        component: UserItems,
                        meta: {
                            title: `Main`,
                            middleware: 'auth'
                        }
                    },
                ]
            },
        ]
    },
    {
        path: '/:catchAll(.*)*',
        component: () => import('@/components/404.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    store.state.bar = false
    next()
})

export default router
