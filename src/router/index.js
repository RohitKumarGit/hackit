import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import newoffer from '@/views/recruiter/newoffer'
import dashboard from '@/views/recruiter/dashboard'
import welcome from '@/views/candidate/welcome'
import role from '@/views/recruiter/role'
import accept from '@/views/candidate/accept'
import dashboard1 from '@/views/manager/dashboard'
Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: newoffer
  }, {
    path: '/dashboard',
    name: 'Home',
    component: dashboard
  },
  {
    path: '/candidate',
    name: 'Home',
    component: welcome
  },{
    path: '/candidate/role',
    name: 'Home',
    component: role
  },
  {
    path: '/candidate/accept',
    name: 'Home',
    component: accept
  },{
    path: '/manager',
    name: 'Home',
    component: dashboard1
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
