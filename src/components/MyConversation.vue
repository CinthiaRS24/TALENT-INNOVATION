<template>
<div>
    <p class="white--text">Mi MyConversation</p>
    <section>
        <main>
            <div v-for="(msg, index) in messages" v-bind:key="'index-' + index">
                <img :src="msg.photoURL" width="30" :alt="msg.displayName"/>
                <p class="white--text">{{msg.text}}</p>
            </div>

            <div ref="scrollable"></div>
        </main>

        <form v-on:submit.prevent="sendMessage">
            <input v-model="message" type="text" placeholder="Escribe tu mensaje!"/>
            <button :disabled="!message" type="submit">Enviar</button>
        </form>
    </section>
</div>
</template>

<script>
import firebase from 'firebase/compat/app';

export default {
    name: 'MyConversation',
    mounted() {
        this.db.collection("messages").orderBy("createdAt")
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

            await this.db.collection("messages").add(messageInfo)

            this.message = ""
            this.$refs["scrollable"].scrollIntoView({behavior: "smooth"})
        }
    }
}
</script>