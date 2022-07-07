<template>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">Bienvenido a Talent</h3>
                    <div> Hola, sí, pequeña descripción</div>
                    <v-btn  
                        color="primary"
                        elevation="2"
                        depressed 
                        @click="loginSubmit"
                        >
                        Ingresa con Google!
                    </v-btn>
                </div>
                </v-card-title>

            </v-card>
        </v-flex>
    </v-layout>



    <!-- <div>
        <v-btn  
            color="primary"
            elevation="2"
            depressed 
            @click="loginSubmit"
            >
            Ingresa con Google!
        </v-btn>
    </div> -->
</template>

<script>
import firebase from 'firebase/compat/app';

export default {
    methods: {
        loginSubmit() {
            const provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithRedirect(provider)
                .catch(error => console.log(error))
        }
    }
}
</script>


