<template>
      <q-card class="q-mt-md">
        <q-tabs
          animated
          :class="{'bg-brown-1': !$q.dark.mode, 'bg-brown-10': $q.dark.mode}"
          v-model="tab"

          align="justify"
          active-bg-color="brown-2"
          inline-label
          indicator-color="brown-1"

        >
          <q-tab name="examen" label="Examen de consciència" />
          <q-tab name="resum" label="opcions seleccionades" />

        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="examen">
            <!-- <div class="text-h6">EXAMEN DE CONSCIENCIA</div> -->
            <cmpExamen />
          </q-tab-panel>

          <q-tab-panel name="resum">
            <!-- <div class="text-h6">RESUM</div> -->
            <cmpResum />
          </q-tab-panel>

        </q-tab-panels>
      </q-card>

</template>


<script setup>
import cmpExamen from './examen'
import cmpResum from './resum'
import { ref, toRef, toRefs, isRef, watch, onMounted, computed } from 'vue'

const tab= ref("examen")




</script>


<style lang="scss" scoped>
  .q-tab {
    border-radius: 30px 30px 0px 0px
  }

</style>
