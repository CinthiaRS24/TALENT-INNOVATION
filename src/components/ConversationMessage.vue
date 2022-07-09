<template>
    <div>
        <img :src="message.photoURL" width="30" :alt="message.displayName"/>
        <p class="white--text">{{ message.text }}</p>
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