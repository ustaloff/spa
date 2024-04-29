import {createRouter, createWebHistory} from 'vue-router'
import store from '@/store'

/* Layouts */
const Main = () => import('@/components/main/Layout.vue')
//const Profile = () => import('@/components/profile/Layout.vue')
//const Dashboard = () => import('@/components/dashboard/Layout.vue')
const Profile = () => import('@/components/main/Layout.vue')
const Dashboard = () => import('@/components/main/Layout.vue')

/* Guest Components */
const Login = () => import('@/components/Login.vue')
const Register = () => import('@/components/Register.vue')

const Index = () => import('@/components/Index.vue')
const Items = () => import('@/components/Items.vue')

/* Profile Components */
const UserItems = () => import('@/components/UserItems.vue')


const routes = [
    {
        //https://stackoverflow.com/questions/67649245/get-the-parent-name-of-childrens-route-vue-js/67657233
        name: 'main',
        path: '/.*',
        component: Main,
        meta: {},
        children: [
            {
                name: 'index',
                path: '/',
                component: Index,
                meta: {
                    title: `Main`,
                    middleware: 'guest'
                }
            },
            {
                name: 'login',
                path: '/login',
                component: Login,
                meta: {
                    title: `Login`,
                    middleware: 'guest'
                }
            },
            {
                name: 'register',
                path: '/register',
                component: Register,
                meta: {
                    title: `Register`,
                    middleware: 'guest'
                }
            },
            {
                name: 'items',
                path: '/items',
                //alias: ['/products/:service', '/products/:service/:type'],
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
        ]
    },
    {
        path: '/profile',
        component: Profile,
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
                name: 'profile',
                path: '/profile',
                component: Index,
                meta: {
                    title: `Main`,
                    middleware: 'auth'
                }
            },
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
    {
        path: '/dashboard',
        component: Dashboard,
        meta: {
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
        children: [
            {
                name: 'dashboard',
                path: '/dashboard',
                component: Index,
                meta: {
                    title: `Dashboard`,
                    middleware: 'admin'
                },
            },
        ]
    },
    {
        //page not found
        path: '/:catchAll(.*)*',
        component: () => import('@/components/UserItems.vue')
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
