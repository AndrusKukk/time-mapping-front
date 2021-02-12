import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'
import Createproject from '../views/Createproject.vue'
import Createactivity from '../views/Createactivity.vue'
import DataSingleActivity from "@/views/DataSingleActivity";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/createproject',
    name: 'Createproject',
    component: Createproject
  },
  {
    path: '/createactivity',
    name: 'Createactivity',
    component: Createactivity
  },
  {
    path: '/datasingleactivity',
    name: 'DataSingleActivity',
    component: DataSingleActivity
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }
  // }
]

const router = new VueRouter({
  routes
})

export default router
