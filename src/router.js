import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue'
import AppBlog from './pages/AppBlog.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/blog',
            name: 'blog',
            component: AppBlog
        }
    ]
});

export { router }