<template>
  <div>
    
    <div id="app">
      <v-app style="background: #002855;">
        <LoginView v-if="!user"></LoginView>
        <!-- <LoginView v-else></LoginView> -->
        <router-view/>
    </v-app>
      
    </div>
  </div>
</template>

<script>
import LoginView from './views/LoginView.vue'
import firebase from 'firebase/compat/app';

export default {
  name: 'App',
  components: {
    LoginView
  },
  data() {
    return {
      user: firebase.auth().currentUser
    }
  }
}
</script>
