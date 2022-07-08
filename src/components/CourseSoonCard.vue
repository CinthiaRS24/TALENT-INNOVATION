<template>
<v-container>
    <v-row>
    <v-card width="300" color="#23436b">
        <v-btn
            color="#f8d155"
            raised
            rounded
            small
        >
        NUEVO
        </v-btn>

        <div>
            <v-card-title>
            CURSO SOON
            </v-card-title>
            <p>Curso</p>
            <v-img>
                Foco
            </v-img>
        </div>

        <p>Descripcion</p>
        
        <div>
            <p>Lecciones, horas, moneda</p>
        </div>

        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            Today
          </div>

          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
      
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Tema1</strong>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
       </v-row>
  </v-container>
</template>

<script>
export default {
    name: 'CourseSoonCard'
}
</script>
