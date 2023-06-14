import { createRouter, createWebHashHistory } from 'vue-router'
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
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/virtualtour',
    name: 'virtualtour',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VirtualTourView.vue')
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is ivisited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignIn.vue')
  },
  {
    path: '/StatsView',
    name: 'StatsView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is ivisited.
    component: () => import(/* webpackChunkName: "about" */ '../views/StatsView.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is ivisited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactPageView.vue')
  },
  {
    path: '/edu',
    name: 'edu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is ivisited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EducationPage.vue')
  },
  {
    path: '/Teacher',
    name: 'Teacher',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is ivisited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TeacherPage.vue')
  },
  {
    path: '/price',
    name: 'price',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is ivisited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PricePage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
