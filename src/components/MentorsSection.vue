<template>
    <v-container 
        style="background-color:#043362;width:350px;height:603px"
        class="align-end justify-end mr-0"
    >
        <p class="title font-weight-light white--text ml-4 tertiary--text mt-1 mb-3">
            > Transformación digital
        </p>

        <p class="subtitle white--text font-weight-light ml-4 mb-2" v-if="mentorSelected">
            Mentor seleccionado
        </p>

        <p class="white--text font-weight-light text-center" v-else>
            Cargando ...
        </p>
        
        <v-card color="#23436b" class="text-center mr-2 ml-2 rounded-lg"  v-if="mentorSelected">
            <v-avatar size="55px" class="mt-4">
                <img
                    :src="mentorSelected.photoURL"
                    alt="Avatar"
                >
            </v-avatar>

            <p class="title white--text font-weight-light mb-0">{{mentorSelected.name}}</p>

            <p class="subtitle-2 white--text font-weight-light mb-3">{{mentorSelected.role}}</p>

            <p class="subtitle-2 text-start ml-4 white--text font-weight-light mb-0">Habilidades</p>
            <v-container class="d-flex justify-space-around pb-4 pt-2">
                <div class="d-flex" v-for="(skill, index) in mentorSelected.skills" 
                    v-bind:key="'mentor-' + index"
                >
                    <v-btn small color="#d7b965" class="text-capitalize rounded-lg" style="font-size:11px;">{{skill}}</v-btn>
                </div>
            </v-container>
        </v-card>

        <p class="subtitle white--text font-weight-light ml-4 mt-6 mb-0">
            Más mentores
        </p>

        <v-container 
            v-for="(mentor, index) in mentors" 
            v-bind:key="'mentor-' + index"
            class="pb-1"
        >
            <v-btn color="#23436b" width="100%" height="65" class="rounded-lg justify-end" @click="goToChat(mentor)">
                <div>
                    <span class="subtitle-1 white--text text-capitalize font-weight-light text-end pr-4">{{ mentor.name }}</span>
                    <p class="subtitle-2 white--text text-capitalize font-weight-light text-end pr-4 mb-0">Mentor</p>
                </div>

                <div class="mr-3">
                    <v-avatar size="50px">
                        <img
                        :src="mentor.photoURL"
                        alt="Avatar" />  
                    </v-avatar>
                </div>
            </v-btn>
        </v-container>
    </v-container>
</template>

<script>
import firebase from 'firebase/compat/app';

export default {
    name: 'MentorsSection',
    mounted() {
        console.log('MentorsSection mounted', this.$route.params.mentorUID);        
        this.fetchMentors();
    },
    data() {
        return {
            db: firebase.firestore(),
            allMentors: []
        }
    },
    computed: {
        mentors() {
            return this.allMentors.filter(mentor => mentor.uid !== this.$route.params.mentorUID);
        },
        mentorSelected() {
            return this.allMentors.find(mentor => mentor.uid === this.$route.params.mentorUID);
        }
    },
    methods: {
        fetchMentors() {
            this.db.collection("mentors").orderBy("order")
            .onSnapshot(querySnap => {
                this.allMentors = querySnap.docs.map(doc => {
                    const mentor = doc.data();
                    mentor.uid = doc.id;
                    return mentor;
                });
            });
        },
        goToChat(mentor) {
            const clickedMentorUid = mentor.uid

            this.$router.push({ 
                name: 'chat', 
                params: {
                    mentorUID: clickedMentorUid
                } 
            });

            this.$emit('selected', mentor);
        }
    }
}
</script>