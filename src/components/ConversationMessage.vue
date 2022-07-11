<template>

    <div>

        <v-container v-if="message.userUID" class="d-flex align-end justify-end mr-0 pr-7" style="width:45%;">
            <v-card color="white" class="rounded-lg pt-1 pb-1">
                <p class="subtitle-2 font-weight-light black--text mb-0 pr-2 pl-2 pt-1 pb-1 text-start">
                    {{ message.text }}
                </p>
            </v-card>
            
            <v-avatar size="45px" class="mt-2 ml-2">
                <img
                    :src="message.photoURL"
                    :alt="message.displayName"
                >
            </v-avatar>
        </v-container>

        <v-container v-else class="d-flex align-start justify-start ml-0" style="width:45%;">
            <v-avatar size="45px" class="mt-2 ml-2">
                <img
                    src="../assets/kami.png"
                    alt="Avatar"
                >
            </v-avatar>

            <v-card color="primary" class="rounded-lg pt-2 pb-2">
                <p class="subtitle-2 white--text font-weight-light text-start mb-0 pr-2 pl-2">
                    {{ message.message }}
                </p>
                <ul>
                    <ol class="subtitle-2 font-weight-light white--text text-start pl-0" 
                        v-for="(alternative, index) in message.alternatives"
                        v-bind:key="'alternative'+index"
                    >
                        {{ alternative }}
                    </ol>
                </ul>
            </v-card>     
        </v-container>

    </div>
</template>

<script>
export default {
    name: "ConversationMessage",
    props: ['message'],
}
</script>