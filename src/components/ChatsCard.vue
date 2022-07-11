<template>
    <v-container>
        <v-card color="#23436b" width="330" height="150" class="mr-auto ml-auto rounded-lg pr-10 pl-10 pt-2">
            <div class="d-flex justify-space-around mt-2">
                <div>
                    <p class="headine white--text font-weight-light text-center mb-0">Contactar</p>
                    <p class="headine white--text font-weight-light text-center mb-0">con un</p>
                    <p class="headine white--text font-weight-light text-center mb-0">mentor</p>
                </div>

                <div>
                    <v-img
                        width="90"
                        src="../assets/chats.png"
                    >
                    </v-img>
                </div>
            </div>
            
            <v-btn
                @click="goToChat()"  
                color="secondary"
                elevation="2"
                depressed 
                width="100%"
                class="text-capitalize font-weight-light mt-1"
            >
                Enviar mensaje
            </v-btn>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "ChatsCard",
    methods: {
        goToChat() {
            this.$router.push({ 
                name: 'chat', 
                params: {
                    mentorUID: 'uc3hOywD3hCOXMCNyFZp'
                } 
            });
        }
    },
}
</script>