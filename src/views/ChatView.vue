<template>
    <div>
        <HeaderSection />

        <div class="d-flex">
            <MyConversation :messages="messages" :mentorUID="mentorUID" :chatBot="chatBot" />
            <MentorsSection @selected="onMentorSelected" />
        </div>
    </div>
</template>

<script>
import HeaderSection from '@/components/HeaderSection.vue'
import MyConversation from '@/components/MyConversation.vue'
import MentorsSection from '@/components/MentorsSection.vue'
import ChatBot from '@/chatbot/ChatBot'
import firebase from 'firebase/compat/app';

export default {
    name: 'ChatView',
    components: {
      HeaderSection, MyConversation, MentorsSection
    },
    mounted() {
        this.listenChat(this.mentorUID, this.mentorName);
    },
    data() {
        return {
            mentorUID: this.$route.params.mentorUID,
            mentorName: "Leandro Gomez",
            db: firebase.firestore(),
            user: firebase.auth().currentUser,
            unsuscribeChat: null,
            messages: [],
            chatBot: ""
        }
    },
    methods: {
        onMentorSelected(mentor) {
            this.mentorUID = mentor.uid;
            this.mentorName = mentor.name;
            console.log('mentoor', this.mentorObject)
            this.listenChat(this.mentorUID, this.mentorName);
        },
        listenChat(mentorUID, mentorName) {
            if (this.unsuscribeChat) {
                this.unsuscribeChat();
            }

            this.chatBot = new ChatBot(firebase.auth().currentUser.displayName, mentorName)

            this.unsuscribeChat = this.db.collection(`users/${this.user.uid}/chats/${mentorUID}/messages`)
                .orderBy("createdAt")
                .onSnapshot(querySnap => {
                    this.messages = querySnap.docs.map(doc => doc.data())
                    console.log('mensajes', this.messages);
                });
        }
    }
}
</script>