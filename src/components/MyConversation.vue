<template>
<div>
    <v-btn flat small @click="goToHome">
        Volver
    </v-btn>
    <p class="white--text text-center">Chat reciente</p>
    <section class="text-center" style="background-color: rgb(35, 67, 107); border-radius: 10px;">
        <main>
            <ConversationMessage 
                v-for="(message, index) in messages"
                :message="message"
                v-bind:key="'conversation-message-' + index" />

            <div ref="scrollable"></div>
        </main>

        <form v-on:submit.prevent="sendMessage">
            <input v-model="message" type="text" placeholder="Escribe tu mensaje!"/>
            <v-btn primary flat :disabled="!message" type="submit">Enviar</v-btn>
        </form>
    </section>
</div>
</template>

<script>
import firebase from 'firebase/compat/app';
import ConversationMessage from '@/components/ConversationMessage.vue'

export default {
    name: 'MyConversation',
    components: {
        ConversationMessage
    },
    mounted() {
        console.log(`Chat with mentorUID: ${this.$route.params.mentorUID} `)
        this.db.collection(`chats/${this.user.uid}/messages`).orderBy("createdAt")
            .onSnapshot(querySnap => {
                this.messages = querySnap.docs.map(doc => doc.data())
            })
    },
    data() {
        return {
            user: firebase.auth().currentUser,
            db: firebase.firestore(),
            message: "",
            messages: [],

            // mentor: "Joshua Arnao",

            // messageChatbot: [
            //     "¡Hola soy Kamy!",
            //     "Escribe brevemente cuál es tu consulta",
            //     `¡Hola ${this.messageInfo.displayName}! Para ayudarte, indícame sobre qué tema tienes dudas, marcando una de las siguientes opciones:
            //      1. Agendar con tutor
            //      2. Entrega de proyecto
            //      3. Certificado
            //      4. Otros`,
            //     `Deseas agendar con el tutor ${this.mentor}:
            //      1. Si
            //      2. No`,
            //     `La disponibilidad del tutor ${this.mentor} son los siguientes:
            //      1. Lunes 5:00 pm - 5:15 pm
            //      2. Lunes 5:15 pm - 5:30pm
            //      3. Miércoles 6:15pm - 6:30pm
            //      4. Viernes 6:30pm - 6:45pm`
            // ]

        }
    },
    methods: {
        async sendMessage() {

            const messageInfo = {
                "userUID": this.user.uid,
                "displayName": this.user.displayName,
                "photoURL": this.user.photoURL,
                "text": this.message,
                "createdAt": Date.now(),
            }

            // await this.db.collection("chats").document(`${this.user.uid}`).collection("messages").add(messageInfo)

            await this.db.collection(`chats/${this.user.uid}/messages`).add(messageInfo);

            this.message = ""
            this.$refs["scrollable"].scrollIntoView({behavior: "smooth"})
        },

        selectedMentor(name) {
            this.mentor = name
        },
        goToHome() {
            this.$router.push({
                name: 'home'
            });
        }

        // messageChatbot() {
        //     const mentor = "Joshua Arnao";

        //     const messageChatbot: [
        //         "¡Hola soy Kamy!",
        //         "Escribe brevemente cuál es tu consulta",
        //         `¡Hola ${this.messageInfo.displayName}! Para ayudarte, indícame sobre qué tema tienes dudas, marcando una de las siguientes opciones:
        //          1. Agendar con tutor
        //          2. Entrega de proyecto
        //          3. Certificado
        //          4. Otros`,
        //         `Deseas agendar con el tutor ${mentor}:
        //          1. Si
        //          2. No`,
        //         `La disponibilidad del tutor ${mentor} son los siguientes:
        //          1. Lunes 5:00 pm - 5:15 pm
        //          2. Lunes 5:15 pm - 5:30pm
        //          3. Miércoles 6:15pm - 6:30pm
        //          4. Viernes 6:30pm - 6:45pm`
        //     ];
        // }
    }
}
</script>