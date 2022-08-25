<template>
  <q-page class="q-mt-xl">
    <br><br><br>
    <div class="q-my-xl text-h4 text-center">LETANÍAS</div>

    <q-card class="q-mb-md">
      <q-card-section>
        <!-- <q-list> -->
          <div
            v-for="(letania1, index1) in objLetanies.part1"
            :key="'IDX1_'+ index1"
          > 
            <div class="row justify-center q-my-sm">
              <div class="col text-negative text-bold">
                {{ letania1.text1}}
              </div>
              <div class="col text-grey">
                {{ letania1.text2}}
              </div>
            </div>
            <q-separator />
          </div>
        <!-- </q-list> -->
      </q-card-section>
    </q-card>

    <q-card class="q-mb-md">
      <q-card-section>
        <!-- <q-list> -->
          <div
            v-for="(letania2, index2) in objLetanies.part2"
            :key="'IDX1_'+ index2"
          > 
            <div class="row justify-center q-my-sm">
              <div class="col text-negative text-bold">
                {{ letania2.text1}}
              </div>
              <div class="col text-grey">
                {{ letania2.text2}}
              </div>
            </div>
            <q-separator />
          </div>
        <!-- </q-list> -->
      </q-card-section>
    </q-card>

    <q-card class="q-mb-md">
      <q-card-section>
        <!-- <q-list> -->
          <div
            v-for="(letania3, index3) in objLetanies.part3"
            :key="'IDX1_'+ index3"
          > 
            <div class="row justify-center q-my-sm">
              <div class="col text-negative text-bold">
                {{ letania3.text1}}
              </div>
              <div class="col text-grey">
                {{ letania3.text2}}
              </div>
            </div>
            <q-separator />
          </div>
        <!-- </q-list> -->
      </q-card-section>
    </q-card>

    <q-card class="q-mb-md">
      <q-card-section>
        <!-- <q-list> -->
          <div
            v-for="(letania4, index4) in objLetanies.part4"
            :key="'IDX1_'+ index4"
          > 
            <div class="row justify-center q-my-sm">
              <div class="col text-negative text-bold">
                {{ letania4.text1}}
              </div>
              <div class="col text-grey">
                {{ letania4.text2}}
              </div>
            </div>
            <q-separator />
          </div>
        <!-- </q-list> -->
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
  import objLetanies from "../dades/letanies.json"
</script>
