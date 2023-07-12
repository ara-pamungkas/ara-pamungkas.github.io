import { createRouter, createWebHistory } from 'vue-router'
import Feed from '@/components/router/Feed.vue'
import About from '@/components/router/About.vue'
import Project from '@/components/router/Project.vue'
import Galery from '@/components/router/Galery.vue'

const routes = [
  {
    path: '/',
    name: 'feed',
    component: Feed
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/project',
    name: 'project',
    component: Project
  },
  {
    path: '/galery',
    name: 'galery',
    component: Galery
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
