import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Signup from "../views/Signup.vue"
import Signin from "../views/Signin.vue"
import Createactivity from "../views/Createactivity.vue"
import Createproject from "../views/Createproject.vue"
import DataActivity from "@/views/DataActivity"
import DataProject from "@/views/DataProject";
import Toggle from "@/views/Toggle";


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
      path: '/toggle',
      name: 'Toggle',
      component: Toggle
    },
    {
      path: '/dataactivity',
      name: 'Dataactivity',
      component: DataActivity
    },
    {
      path: '/dataproject',
      name: 'Dataproject',
      component: DataProject
    },
  ]
})
