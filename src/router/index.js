import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/blog',
    name: 'BlogView',
    component: () => import( '../views/BlogView.vue')
  },
  {
    path: '/CustomerStories',
    name: 'CustomerStories',
    component: () => import( '../views/CustomerStories.vue')
  },
  {
    path: '/Pricing',
    name: 'PricingView',
    component: () => import( '../views/PricingView.vue')
  },
  {
    path: '/Features',
    name: 'FeaturesView',
    component: () => import( '../views/FeaturesView.vue')
  },


  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
