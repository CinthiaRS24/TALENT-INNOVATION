<template>
  <div>
    
    <HeaderSection />

    <CoursesSection />

    <v-container d-flex>
    <GradesCard />

    <NewsCard /> 

    <ChatsCard />
    </v-container>


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
import CoursesSection from '@/components/CoursesSection.vue'
import GradesCard from '@/components/GradesCard.vue'
import NewsCard from '@/components/NewsCard.vue'
import ChatsCard from '@/components/ChatsCard.vue'
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
      HeaderSection, CoursesSection, GradesCard, NewsCard, ChatsCard
    },
    data() {
      return {
        user: firebase.auth().currentUser
      }
    }
  }
</script>
