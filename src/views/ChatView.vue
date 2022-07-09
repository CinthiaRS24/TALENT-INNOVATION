<template>
    <div>
        <HeaderSection />

        <div class="d-flex">
            <MyConversation :messages="messages" :mentorUID="mentorUID" />
            <MentorsSection @selected="onMentorSelected" />
        </div>
    </div>
</template>

<script>
import HeaderSection from '@/components/HeaderSection.vue'
import MyConversation from '@/components/MyConversation.vue'
import MentorsSection from '@/components/MentorsSection.vue'
import firebase from 'firebase/compat/app';

export default {
    name: 'ChatView',
    components: {
      HeaderSection, MyConversation, MentorsSection
    },
    mounted() {
        this.listenChat(this.mentorUID);
    },
    data() {
        return {
            mentorUID: this.$route.params.mentorUID,
            db: firebase.firestore(),
            user: firebase.auth().currentUser,
            unsuscribeChat: null,
            messages: [],
        }
    },
    methods: {
        onMentorSelected(selectedMentorUid) {
            console.log('onMentorSelected', selectedMentorUid);
            this.mentorUID = selectedMentorUid;
            this.listenChat(this.mentorUID);
        },
        listenChat(mentorUID) {
            if (this.unsuscribeChat) {
                this.unsuscribeChat();
            }

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