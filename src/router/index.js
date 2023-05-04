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
    component: () => import( '../views/AboutPage.vue')
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
  {
    path: '/signUp',
    name: 'signUp',
    component: () => import( '../views/signUp.vue')
  },
  {
    path: '/TermsofUse',
    name: 'TermsofUse',
    component: () => import( '../views/TermsofUse.vue')
  },
  {
    path: '/privacy',
    name: 'privacyPolicy',
    component: () => import( '../views/privacyPolicy.vue')
  },
  {
    path: '/eu-privacy',
    name: 'euPrivacy',
    component: () => import( '../views/euPrivacy.vue')
  }


  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
