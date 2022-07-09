<template>
<div>
    <v-btn text small @click="goToHome">
        Volver
    </v-btn>
    <p class="white--text text-center">Chat reciente</p>
    <section class="text-center" style="background-color: rgb(35, 67, 107); border-radius: 10px;">
        <main>
            <WelcomeMessage v-if="messages.length === 0" />

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
            <v-btn secondary text :disabled="messages.length === 0" type="button" @click="clearChat()">
                Limpiar
            </v-btn>
        </form>
    </section>
</div>
</template>

<script>
import firebase from 'firebase/compat/app';
import ConversationMessage from '@/components/ConversationMessage.vue'
import WelcomeMessage from '@/components/WelcomeMessage.vue'
import ChatBot from '@/chatbot/ChatBot'

export default {
    name: 'MyConversation',
    components: {
        ConversationMessage,
        WelcomeMessage
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
            chatBot: new ChatBot(firebase.auth().currentUser.displayName, "Mentor Name")
        }
    },
    methods: {
        async sendMessage() {

            const chatRef = this.db.collection(`users/${this.user.uid}/chats/${this.mentorUID}/messages`); // Otra forma: this.db.collection("chats").document(`${this.user.uid}`).collection("messages").add(userMessage)

            const userMessage = {
                "userUID": this.user.uid,
                "displayName": this.user.displayName,
                "photoURL": this.user.photoURL,
                "text": this.message,
                "createdAt": Date.now()
            };

            await chatRef.add(userMessage);


            const botMessage = this.chatBot.reply(this.message);
            
            if (botMessage) {
                botMessage.print();
                await chatRef.add(botMessage.toJsObject());
            }

            this.message = "";

            // this.$refs["scrollable"].scrollIntoView({behavior: "smooth"});
        },

        goToHome() {
            this.$router.push({
                name: 'home'
            });
        },

        clearChat() {
            console.log('Deleting all messages in chat');

            firebase.firestore().collection(`users/${this.user.uid}/chats/${this.mentorUID}/messages`)
                .get()
                .then(querySnapshot => {
                    querySnapshot.docs.forEach(doc => doc.ref.delete());
                });
        }
    }
}
</script>
