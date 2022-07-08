<template>
    <v-container>
        <v-card color="#23436b" width="330" height="150" class="mr-auto ml-auto rounded-lg d-flex justify-space-around align-center pr-6 pl-6">
            <div>
            <p class="title white--text font-weight-light">Mis notas</p>
            <v-btn  
                color="secondary"
                elevation="2"
                depressed
                width="100%"
                class="font-weight-light">
                IR
            </v-btn>
            </div>
            <div >
            <v-img
               width="100"
                        src="../assets/grades.png"
                    >
                    </v-img>
                </div>
        </v-card>
        
    </v-container>
</template>

<script>
export default {
    name: 'GradesCard'
}
</script>