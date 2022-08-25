<template>

  <!-- <q-card>
    <q-card-section>{{objOI['credo'].titol}}</q-card-section>
    <q-card-section>
      <div
        v-for="(linia, index1) in objOI['credo'].arrText"
        :key="'OI1' + index1"
      >
        {{ linia }}
      </div>
    </q-card-section>
  </q-card> -->


  <q-expansion-item
    class="q-mb-md"
    expand-separator
    :label="objOI['porlasenyal'].titol"
    header-class="text-negative"
  >
    <q-card>
      <q-card-section>
        <div
          v-for="(linia, index1) in objOI['porlasenyal'].arrText"
          :key="'OI11' + index1"
        >
          {{ linia }}
        </div>
      </q-card-section>
    </q-card>
  </q-expansion-item>


  <q-expansion-item
    class="q-mb-md"
    expand-separator
    :label="objOI['actodecontricion'].titol"
    header-class="text-negative"
  >
    <q-card>
      <q-card-section>
        <div
          v-for="(linia, index1) in objOI['actodecontricion'].arrText"
          :key="'OI111' + index1"
        >
          {{ linia }}
        </div>
      </q-card-section>
    </q-card>
  </q-expansion-item>


  <q-expansion-item
    class="q-mb-md"
    expand-separator
    :label="objOI['credo'].titol"
    header-class="text-negative"
  >
    <q-card>
      <q-card-section>
        <div
          v-for="(linia, index1) in objOI['credo'].arrText"
          :key="'OI1' + index1"
        >
          {{ linia }}
        </div>
      </q-card-section>
    </q-card>
  </q-expansion-item>




  <q-expansion-item
    class="q-mb-md"
    expand-separator
    :label="objOI['padrenuestro'].titol"
    header-class="text-negative"
  >
    <q-card>
      <q-card-section>
        <div
          v-for="(linia, index2) in objOI['padrenuestro'].arrText"
          :key="'OI1' + index2"
        >
          {{ linia }}
        </div>
      </q-card-section>
    </q-card>
  </q-expansion-item>




  <q-expansion-item
    class="q-mb-md"
    expand-separator
    :label="objOI['avemaria'].titol + ' (x3) '"
    header-class="text-negative"
  >
    <q-card>
      <q-card-section>
        <div
          v-for="(linia, index3) in objOI['avemaria'].arrText"
          :key="'OI1' + index3"
        >
          {{ linia }}
        </div>
      </q-card-section>
    </q-card>
  </q-expansion-item>


  <q-expansion-item
    expand-separator
    :label="objOI['gloria'].titol"
    header-class="text-negative"
  >
    <q-card>
      <q-card-section>
        <div
          v-for="(linia, index1) in objOI['gloria'].arrText"
          :key="'OI1' + index1"
        >
          {{ linia }}
        </div>
      </q-card-section>
    </q-card>
  </q-expansion-item>








</template>

<script setup>
  import objOI from "../dades/oracions.json"

</script>

<style>

</style>