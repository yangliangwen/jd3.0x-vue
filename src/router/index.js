import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/Login.vue'
//  

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name:'login',
    redirect: '/login',
  },
  {
    path: '/index',
    name: 'index',
    component: () => import(/* webpackChunkName: "index" */ '../views/Index.vue')
  },
 
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/bottomNav',
    name: 'bottomNav',
    component: () => import(/* webpackChunkName: "index" */ '../views/BottomNav.vue'),
    children:[
      {
        path: '',
        redirect: 'index',
      },
      {
        path: 'index',
        name: 'index',
        component: () => import(/* webpackChunkName: "index" */ '../views/Index.vue')
      },
      {
        path: 'list',
        name: 'list',
        component: () => import(/* webpackChunkName: "index" */ '../views/List.vue')
      },
      {
        path: 'search',
        name: 'search',
        component: () => import(/* webpackChunkName: "index" */ '../views/Search.vue')
      },
      {
        path: 'car',
        name: 'car',
        component: () => import(/* webpackChunkName: "index" */ '../views/Car.vue')
      },
      {
        path: 'mine',
        name: 'mine',
        component: () => import(/* webpackChunkName: "index" */ '../views/Mine.vue')
      }
    
    ]
  },
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
