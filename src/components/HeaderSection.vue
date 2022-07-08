<template>
    <v-app-bar color="primary" dark>
        <v-img
            max-width="70"
            src="../assets/logoTI.png"
        >
        </v-img>

        <v-spacer></v-spacer>

        <v-btn  
            color="secondary"
            elevation="2"
            depressed
        >
            <span class="text-capitalize pr-3 font-weight-light">{{user.displayName}}</span>
            <v-img
                height="30"
                width="30"
                pl="18"
                src="../assets/user.png"
            >
            </v-img>
        </v-btn>

        <v-btn
            color="primary"
            elevation="0"
        >
            <v-img
                max-width="30"
                src="../assets/notificacion.png"
            >
            </v-img>
        </v-btn>
    </v-app-bar>
</template>

<script>
import firebase from 'firebase/compat/app';

export default {
    name: 'HeaderSection',
     data() {
      return {
        user: firebase.auth().currentUser
      }
    }
}
</script>
