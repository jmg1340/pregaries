<template>
  <div class="q-pa-md">
    <div class="text-h4 text-center q-mb-md titolPagina">Pregàries</div>

      <q-card>
        <q-tabs
          v-model="tab"
          class="lletraTitolApartat bg-brown text-white"
          align="justify"
          narrow-indicator
        >
          <q-tab name="categories" label="per Categories" noCaps content-class="font-size: 4rem"/>
          <q-tab name="cercador" label="Cercador" noCaps />
          <!-- <q-tab name="movies" label="Movies" /> -->
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated class="bg-brown-1">
          <q-tab-panel name="categories">
            <div class="text-h6">
							<jmgCategories />
						</div>
            
          </q-tab-panel>

          <q-tab-panel name="cercador" class="bg-brown-2">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <!-- <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel> -->
        </q-tab-panels>
      </q-card>





  </div>
</template>

<script setup>
import { ref } from 'vue'
import jmgCategories from "../components/categories.vue"

const tab = ref('categories')

</script>

<style lang="scss" scoped>
.xxx {
	font-size: 4rem;
}

</style>