<template>
    <v-app-bar color="primary" dark>
        <v-img
            max-width="70"
            src="../assets/logoTI.png"
        >
        </v-img>

        <v-spacer></v-spacer>

           
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn  
                    color="secondary"
                    elevation="2"
                    depressed
                    v-bind="attrs"
                    v-on="on"
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
            </template>
            <v-list class="secondary"  :style="{'text-align':'center'}">
                <v-btn  
                    color="primary"
                    elevation="2"
                    depressed 
                    @click="logout"
                    ml="10"
                >
                Logout
                </v-btn>
            </v-list>
        </v-menu>


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
    },
    methods: {
        logout() {
            firebase.auth().signOut()
                .catch(error => console.log(error))
            this.handlerLogin()
        },
        handlerLogin() {
            this.$router.push('/login')
        }
    },
}
</script>
