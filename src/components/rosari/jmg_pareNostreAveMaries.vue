<template>
  <q-card class="q-pa-md q-mb-xl">
    <!-- <div class="text-right q-mr-md q-mt-sm">
			<q-btn noCaps dense color="negative" @click="resetAll">Reset</q-btn>
		</div> -->

    <!-- <q-card-section v-for="(misteri, indexMisteri) in misteris" :key="misteri"> -->

    <div class="text-grey-6">Padre nuestro...</div>
    <div class="text-grey-6">10 Avemarias...</div>
    <div class="text-center">
      <q-img
        src="~assets/maria.jpg"
        spinner-color="white"
        style="max-width: 200px"
        class="q-mb-md"
      />
    </div>

    <div class="row q-gutter-md q-mb-sm justify-center">
      <!-- <cmp_unitat v-for="n in 10" :numero="n" :key="n" :ref="'m'+indexMisteri+'u'+n" /> -->
      <cmp_unitat
        v-for="n in 10"
        :numero="n"
        :key="n"
      />
    </div>

    <div class="q-mb-lg text-grey-6">Gloria...</div>

    <q-card >
    <q-card>
			<q-card-section>
				María, Madre de gracia, Madre de piedad y misericordia, defiéndenos de nuestros enemigos y ampáranos, ahora y en la hora de nuestra muerte, amén.
			</q-card-section>
		</q-card>
			<q-card-section>
				Oh mi buen Jesús, perdona nuestros pecados líbranos del fuego del infierno, lleva al cielo a todas las almas, especialmente a las más necesitadas de tu misericordia.
			</q-card-section>
		</q-card>
    <!-- </q-card-section> -->
  </q-card>
</template>

<script setup>
import cmp_unitat from "./santRosari_unitat"

</script>

<style lang="css" scoped>
</style>