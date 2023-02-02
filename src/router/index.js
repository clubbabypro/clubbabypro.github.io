import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrivacyView from '../views/PrivacyView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/hotpursuit',
    name: 'hotpursuit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HotPursuitView.vue'),
  },
  {
    path: '/privacy',
    name: '/privacy',
    component: PrivacyView,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
