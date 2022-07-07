<template>
  <div>
    <v-app-bar color="primary" dark fixed>
      <v-app-bar-title>Talent Innovation</v-app-bar-title>
    </v-app-bar>
    
    <p>Soy la vista home {{user.displayName}}</p>
    <MyChat />

    <v-footer color="primary" app>
      <span class="white--text">&copy; 2022</span>
    </v-footer>
    

    <v-btn  
            color="primary"
            elevation="2"
            depressed 
            @click="logout"
            >
            Logout!
        </v-btn>
  </div>
  
</template>

<script>
import MyChat from '@/components/MyChat.vue'
import firebase from 'firebase/compat/app';

  export default {
    name: 'HomeView',
    methods: {
      logout() {
        firebase.auth().signOut()
          .catch(error => console.log(error))
      }
    },
    components: {
      MyChat
    },
    data() {
      return {
        user: firebase.auth().currentUser
      }
    }
  }
</script>
