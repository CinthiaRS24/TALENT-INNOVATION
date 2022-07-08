import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChatView from '../views/ChatView.vue'

 

Vue.use(VueRouter)

const routes = [
    {
    path: '/login',
    name: 'LoginView',
    component: HomeView
  },
  {
    path: '/home',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/chat',
    name: 'ChatView',
    component: ChatView
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router