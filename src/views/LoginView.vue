<template>
    <v-layout row wrap align-center>
        <v-flex sm4 offset-sm4>
            <v-card class="d-flex align-center justify-center" height="500" width="380">
                <v-card-title primary-title class="mb-5 pb-5 ml-6 mr-6 align-center justify-center">
                        <p class="display-1 font-weight-black primary--text">
                            Talent Innovation
                        </p>
                        
                        <p class="body-2 mb-15 pb-15 font-weight-black primary--text">
                            Esto será una asombrosa experiencia
                        </p>
                        
                        <v-btn 
                            class="mt-15" 
                            color="secondary"
                            elevation="2"
                            depressed 
                            @click="googleLogin"
                            >

                            Ingresa con Google
                        </v-btn>
                </v-card-title>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default {
    created() {
        console.log('LoginView: created');

        firebase.auth().onAuthStateChanged((user) => {
            console.log('LoginView [onAuthStateChanged] user', user);
            if (user) {
                this.$router.push({ name: 'home' }); 
            }
        });
    },
    methods: {
        googleLogin() {
            const provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth()
                .signInWithPopup(provider)
                .catch(error => console.log(error));
        }
    }
}
</script>


