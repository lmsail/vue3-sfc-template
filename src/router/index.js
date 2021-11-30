import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/home.vue')
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('@/views/about.vue')
        },
        {
            path: '/other',
            name: 'Other',
            component: () => import('@/views/other.vue')
        }
    ]
});

export default router