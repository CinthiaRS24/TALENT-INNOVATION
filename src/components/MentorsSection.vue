<template>
    <v-container style="background-color:#043362;width:350px;height:590px" class="align-end justify-end mr-0">
        <p class="white--text ml-4 yellow--text" >> Transformación Digital</p>
        
        <v-container v-for="(mentor, index) in mentors" 
            v-bind:key="'mentor-' + index"
        >
            
            <v-btn color="#23436b" width="100%" height="85" class="rounded-lg">
                <div>
                    <span class="white--text">{{ mentor.name }}</span>
                    <p class="white--text">Mentor</p>
                </div>

                <div >
                    <v-img
                        width="100"
                        src="../assets/grades.png"
                    >
                    </v-img>
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
        this.db.collection("mentors")
            .onSnapshot(querySnap => {
                this.mentors = querySnap.docs.map(doc => doc.data())
                console.log('mentors', this.mentors)
            })
    },
    data() {
        return {
            db: firebase.firestore(),
            mentors: [],
        }
    }
}
</script>