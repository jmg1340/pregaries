<template>
  <q-page class="q-mt-lg">


    <q-card>
      <q-card-section>
        ORACIÓN
      </q-card-section>
      <q-card-section>
        <div
          v-for="(linia, index1) in objOracions['teRogamosNosConcedas'].arrText"
          :key="'OF1' + index1"
        >
          {{ linia }}
        </div>
      </q-card-section>

      <q-card-section>
        <q-card class="bg-grey-2 q-ma-xs q-pa-md">
          <div class="text-h5">Por las intenciones del Papa</div>
          <q-card-section>
            <div
              v-for="(linia, index2) in objOracions['padrenuestro'].arrText"
              :key="'OF3' + index2"
            >
              {{ linia }}
            </div>
          </q-card-section>
          <q-card-section>
            <div
              v-for="(linia, index2) in objOracions['avemaria'].arrText"
              :key="'OF4' + index2"
            >
              {{ linia }}
            </div>
          </q-card-section>
          
          <q-card-section>
            <div
              v-for="(linia, index2) in objOracions['gloria'].arrText"
              :key="'OF5' + index2"
            >
              {{ linia }}
            </div>
          </q-card-section>

        </q-card>
      </q-card-section>

      <q-card-section>
        <div
          v-for="(linia, index1) in objOracions['laSalve'].arrText"
          :key="'OF11' + index1"
        >
          {{ linia }}
        </div>
      </q-card-section>


      <q-card-section>
        Ave María purísima... sin pecado concebida.
      </q-card-section>
      <q-card-section>
        <div
          v-for="(linia, index1) in objOracions['ohGloriosoSanMiguel'].arrText"
          :key="'OF2' + index1"
        >
          {{ linia }}
        </div>

      </q-card-section>


      
      
    </q-card>



  </q-page>
</template>


<style scoped>
  .borde {
    border: 1px solid red
  }
</style>

<script setup>
  import objOracions from "../dades/oracions.json"
</script>
