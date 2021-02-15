import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Signup from "../views/Signup.vue"
import Signin from "../views/Signin.vue"
import Createactivity from "../views/Createactivity.vue"
import Createproject from "../views/Createproject.vue"
import DataSingleActivity from "@/views/DataSingleActivity";


Vue.use(Router)



export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
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
      path: '/createactivity',
      name: 'Createactivity',
      component: Createactivity
    },
    {
      path: '/createproject',
      name: 'Createproject',
      component: Createproject
    },
    {
      path: '/datasingleactivity',
      name: 'Datasingleactivity',
      component: DataSingleActivity
    },
  ]
})
