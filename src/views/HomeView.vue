<template>
  <div>
    <!-- <v-app-bar color="primary" dark>
      <v-app-bar-title>Talent Innovation</v-app-bar-title>
    </v-app-bar> -->
    
    <HeaderSection />
    <p>Soy la vista home {{user.displayName}}</p>
    <MyChat />


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
import HeaderSection from '@/components/HeaderSection.vue'
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
      HeaderSection, MyChat
    },
    data() {
      return {
        user: firebase.auth().currentUser
      }
    }
  }
</script>
