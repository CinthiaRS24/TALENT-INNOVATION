<template>
    <v-container>
        <p class="white--text">Cursos</p>

        <v-container class="d-flex justify-space-around" >
            <CourseCard />
            <CourseSoonCard />
        </v-container>
        
    </v-container>

   
    
</template>

<script>
import CourseCard from './CourseCard.vue'
import CourseSoonCard from './CourseSoonCard.vue'

export default {
    name: 'CoursesSection',
    components: {
        CourseCard, CourseSoonCard
    }
}
</script>