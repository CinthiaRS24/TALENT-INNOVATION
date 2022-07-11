import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase/compat/app';
import LoginView from '../views/LoginView.vue';
import HomeView from '../views/HomeView.vue';
import ChatView from '../views/ChatView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/chats/:mentorUID',
    name: 'chat',
    component: ChatView,
    meta: {
      requiresAuth: true
    }
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

/**
 * If a route requires authentication and there is not an authenticated user,
 * we go to the 'login' route. 
 */
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next({ name: 'login' });
  } else {
    next();
  }
});  

export default router;