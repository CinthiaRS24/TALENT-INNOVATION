<template>
  <div>
    
    <div id="app">
      <v-app>
        <HomeView v-if="user"></HomeView>
        <MyLogin v-else></MyLogin>
        <!-- <router-view/> -->
    </v-app>
      
    </div>
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue'
import MyLogin from './views/MyLogin.vue'
import firebase from 'firebase/compat/app';

export default {
  name: 'App',
  components: {
    HomeView, MyLogin
  },
  data() {
    return {
      user: firebase.auth().currentUser
    }
  }
}
</script>
