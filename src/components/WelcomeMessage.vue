<template>
    <v-container class="d-flex align-start" width="80">
        <v-avatar size="82px" class="mt-2">
            <img
                src="../assets/kami.png"
                alt="Avatar"
            >
        </v-avatar>

        <v-container class="pl-0">
            <v-card color="primary" class="rounded-lg pr-2" style="width:max-content;">
                <p class="subtitle white--text text-start font-weight-light ml-2 mb-3 pt-1 pb-1">
                    ¡Hola soy Kamy!
                </p>
            </v-card>
            
            <v-card color="primary" class="rounded-lg pr-2" style="width:max-content;">
                <p class="subtitle-2 white--text font-weight-light ml-2 pt-1 pb-1">
                    Escribe brevemente cuál es tu consulta
                </p>
            </v-card>
        </v-container>
    </v-container>
</template>

<script>
export default {
    name: "WelcomeMessage"
}
</script>