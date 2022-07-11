<template>
    <div>

        <v-btn small outlined color="white" class="font-weight-light ml-13 mt-6" @click="goToHome">
            <div >
                <v-img
                    width="20"
                    src="../assets/back.png"
                >
                </v-img>
            </div>
            Volver
        </v-btn>

    
        <p class="title font-weight-light white--text text-center mb-3">
            Chat reciente
        </p>
    
        <v-card class="v-card__text my-list text-center ml-12 rounded-lg" color="#23436b" width="900" height="440">
            <div>
                
                <WelcomeMessage v-if="messages.length === 0" />

                <ConversationMessage 
                    v-for="(message, index) in messages"
                    :message="message"
                    v-bind:key="'conversation-message-' + index"
                />

            </div>
        </v-card>

        <form v-on:submit.prevent="sendMessage" style="margin-left:50px;">
            <v-container class="d-flex pl-0 pr-0 pt-1">
                <v-card class="mt-3 rounded-lg" color="#23436b" >
                    <input 
                        v-model="message" 
                        class="pl-5 white--text font-weight-light" 
                        type="text" 
                        style="width:700px; height:30px" 
                        placeholder="Escribir mensaje"
                    />
                </v-card>
        
                <v-btn 
                    small outlined 
                    color="primary" 
                    class="pl-0 pr-0 ml-1 mt-3" 
                    min-width="25"
                >
                    <v-img
                        width="10px"
                        src="../assets/attach.png"
                    >
                    </v-img>
                </v-btn>
            
                <div class="ml-1">
                    <v-btn 
                        class="secondary rounded-lg mt-3" 
                        small :disabled="!message" 
                        type="submit"
                    >
                        Enviar
                    </v-btn>

                    <v-btn 
                        class="secondary rounded-lg mt-3 ml-2" 
                        small :disabled="messages.length === 0" 
                        type="button" 
                        @click="clearChat()"
                    >
                        Limpiar
                    </v-btn>
                </div>
            </v-container>      
        </form>
    </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import ConversationMessage from '@/components/ConversationMessage.vue'
import WelcomeMessage from '@/components/WelcomeMessage.vue'

export default {
    name: 'MyConversation',
    components: {
        ConversationMessage,
        WelcomeMessage
    },
    props: [
        "messages",
        "mentorUID",
        "chatBot"
    ],
    data() {
        return {
            user: firebase.auth().currentUser,
            db: firebase.firestore(),
            message: "",
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
        },
        goToHome() {
            this.$router.push({
                name: 'home'
            });
        },

        clearChat() {
            firebase.firestore().collection(`users/${this.user.uid}/chats/${this.mentorUID}/messages`)
                .get()
                .then(querySnapshot => {
                    querySnapshot.docs.forEach(doc => doc.ref.delete());
                });
        }
    }
}
</script>

<style scoped>
    input::placeholder {
    font-size: 15px;
    font-style: italic;
    }

    .my-list {
    
        height: 440px;
        overflow-y: auto;
    }
</style>