<template>
    <div>
        <v-card v-if="message.userUID" dark>
            <img :src="message.photoURL" width="30" :alt="message.displayName"/>
            <p class="white--text">{{ message.text }}</p>
        </v-card>
        <v-card v-else dark>
            <img src="https://economipedia.com/wp-content/uploads/robot1-1.jpg" width="30" alt="ChatBot avatar" />
            <p class="white--text">{{ message.message }}</p>
            <ul>
                <ol v-for="(alternative, index) in message.alternatives" v-bind:key="'alternative'+index">
                    {{ alternative }}
                </ol>
            </ul>
        </v-card>        
    </div>
</template>

<script>
export default {
    name: "ConversationMessage",
    props: ['message'],
    methods: {
    
    }
}
</script>

<style>

</style>