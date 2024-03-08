import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue'
import AppBlog from './pages/AppBlog.vue'
import AppNotFound from './pages/AppNotFound.vue'
import SingleProject from './pages/SingleProject.vue';
import ProjectsType from './pages/ProjectsType.vue';
import AppContactUs from './pages/AppContactUs.vue';

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
        },
        {
            path: '/blog/:slug',
            name: 'single-project',
            component: SingleProject
        },
        {
            path: '/blog/type/:slug',
            name: 'projects-type',
            component: ProjectsType
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContactUs
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: AppNotFound
        }
    ]
});

export { router }