import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '@/views/Home.vue';
import Error404 from '@/views/Error404.vue';
import store from '@/store';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            allowAnonymous: true,
        },
    },
    {
        path: '/trade',
        name: 'Trading',
        component: () => import(/* webpackChunkName: "trade" */ '@/views/Trading.vue'),
    },
    {
        path: '/graph',
        name: 'Graph',
        component: () => import(/* webpackChunkName: "graph" */ '@/views/Graphs.vue'),
    },
    {
        path: '/logs',
        name: 'Logs',
        component: () => import(/* webpackChunkName: "graph" */ '@/views/LogView.vue'),
    },
    {
        path: '/backtest',
        name: 'Backtest',
        component: () => import(/* webpackChunkName: "backtest" */ '@/views/Backtesting.vue'),
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Settings.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/LoginView.vue'),
        meta: {
            allowAnonymous: true,
        },
    },
    {
        path: '*',
        name: '404',
        component: Error404,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    const hasBots = store.getters['ftbot/hasBots'];
    if (!to.meta?.allowAnonymous && !hasBots) {
        // Forward to login if login is required
        next({
            path: '/login',
            query: {redirect: to.fullPath},
        });
    } else {
        next();
    }
});

export default router;
