<template>
    <v-container style="background-color:#043362;width:350px;height:590px" class="align-end justify-end mr-0">
        <p class="white--text ml-4 yellow--text">
            > Transformación Digital
        </p>

        <p class="subtitle white--text font-weight-light ml-4" v-if="mentorSelected">
            Mentor seleccionado
        </p>
        <p class="white--text font-weight-light text-center" v-else>
            Cargando ...
        </p>
        
        <v-card color="#23436b" class="text-center" v-if="mentorSelected">
            <v-avatar size="55px">
                <img
                    :src="mentorSelected.photoURL"
                    alt="Avatar"
                >
            </v-avatar>

            <p class="title white--text font-weight-light mb-0">{{mentorSelected.name}}</p>

            <p class="white--text font-weight-light">{{mentorSelected.role}}</p>

            <p class="text-start ml-4 white--text font-weight-light mb-0">Habilidades</p>
            <v-container class="d-flex justify-space-around">
                <div class="d-flex" v-for="(skill, index) in mentorSelected.skills" 
                    v-bind:key="'mentor-' + index"
                >
                    <v-btn small color="#d7b965" class="text-capitalize rounded-lg" >{{skill}}</v-btn>
                </div>
            </v-container>
        </v-card>

        <p class="subtitle white--text font-weight-light ml-4">
            Más mentores
        </p>

        <v-container 
            v-for="(mentor, index) in mentors" 
            v-bind:key="'mentor-' + index"
        >
            <v-btn color="#23436b" width="100%" height="65" class="rounded-lg" @click="goToChat(mentor.uid)">
                <div>
                    <span class="white--text">{{ mentor.name }}</span>
                    <p class="white--text">Mentor</p>
                </div>

                <div >
                    <v-avatar size="55px">
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
        goToChat(clickedMentorUid) {
            console.log('clickedMentorUid', clickedMentorUid);

            this.$router.push({ 
                name: 'chat', 
                params: {
                    mentorUID: clickedMentorUid
                } 
            });

            this.$emit('selected', clickedMentorUid);
        }
    }
}
</script>