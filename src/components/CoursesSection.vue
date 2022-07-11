<template>
    <v-container class="pb-0">

        <p class="white--text mb-0 mt-1 ml-8">
            Cursos
        </p>

        <v-container class="d-flex justify-space-around pb-0">
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