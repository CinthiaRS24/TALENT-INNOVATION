<template>
    <v-container>
        <v-card color="#23436b" width="150">
            <p>Contactar con un mentor</p>
            <v-btn
                @click="handlerChat()"  
                color="secondary"
                elevation="2"
                depressed 
                class="text-capitalize">
                Enviar mensaje
            </v-btn>
        </v-card>
        
    </v-container>
</template>

<script>
export default {
    name: "ChatsCard",
    methods: {
        handlerChat() {
        this.$router.push('/chat')
        }
    },
}
</script>

<style>

</style>