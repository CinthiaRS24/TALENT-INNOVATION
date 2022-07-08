<template>
  <div>
    
    <div id="app">
      <v-app style="background: #002855;">
        <HomeView v-if="user"></HomeView>
        <LoginView v-else></LoginView>
        <!-- <router-view/> -->
    </v-app>
      
    </div>
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue'
import LoginView from './views/LoginView.vue'
import firebase from 'firebase/compat/app';

export default {
  name: 'App',
  components: {
    HomeView, LoginView
  },
  data() {
    return {
      user: firebase.auth().currentUser
    }
  }
}
</script>
