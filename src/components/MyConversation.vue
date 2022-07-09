<template>
<div>
    <v-btn text small @click="goToHome">
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
            <v-btn primary text :disabled="!message" type="submit">
                Enviar
            </v-btn>
        </form>
    </section>
</div>
</template>

<script>
import firebase from 'firebase/compat/app';
import ConversationMessage from '@/components/ConversationMessage.vue'
import ChatBot from '@/chatbot/ChatBot'

export default {
    name: 'MyConversation',
    components: {
        ConversationMessage
    },
    props: [
        "messages",
        "mentorUID"
    ],
    data() {
        return {
            user: firebase.auth().currentUser,
            db: firebase.firestore(),
            message: "",
            chatBot: new ChatBot('Cinthia', 'Mentor Name')
        }
    },
    methods: {
        sendMessage() {
            const botMessage = this.chatBot.reply(this.message);

            botMessage.print();

            /*const messageInfo = {
                "userUID": this.user.uid,
                "displayName": this.user.displayName,
                "photoURL": this.user.photoURL,
                "text": this.message,
                "createdAt": Date.now(),
            };*/

            // Otra forma: this.db.collection("chats").document(`${this.user.uid}`).collection("messages").add(messageInfo)
            // await this.db.collection(`users/${this.user.uid}/chats/${this.mentorUID}/messages`).add(messageInfo);

            this.message = "";

            // this.$refs["scrollable"].scrollIntoView({behavior: "smooth"});
        },

        goToHome() {
            this.$router.push({
                name: 'home'
            });
        },
    }
}
</script>
