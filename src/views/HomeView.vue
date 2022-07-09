<template>
  <div>
    
    <HeaderSection />

    <CoursesSection />

    <v-container d-flex>
      <GradesCard />

      <NewsCard /> 

      <ChatsCard />
    </v-container>

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
