<template>
  <q-card class="q-pa-md q-mb-xl">
    <!-- <div class="text-right q-mr-md q-mt-sm">
			<q-btn noCaps dense color="negative" @click="resetAll">Reset</q-btn>
		</div> -->

    <!-- <q-card-section v-for="(misteri, indexMisteri) in misteris" :key="misteri"> -->

    <div class="text-grey-6">Pare nostre...</div>
    <div class="text-grey-6 q-mb-md">10 Avemaries...</div>
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

    <div class="q-my-md text-grey-6">Gloria...</div>

    <q-card >
    <q-card>
			<q-card-section>
				<div class="borde q-pa-sm">
					Maria, Mare de gràcia, Mare de pietat i misericòrdia, defensa'ns dels nostres enemics i empara'ns, ara i a l'hora de la nostra mort, amén.
				</div>
			</q-card-section>
		</q-card>
			<q-card-section>
				<div class="borde q-pa-sm">
					Oh bon Jesús, perdona els nostres pecats, deslliura'ns del foc de l'infern i porta al cel totes les ànimes, especialment les més necessitades de la teva misericòrdia.
				</div>
			</q-card-section>
		</q-card>
    <!-- </q-card-section> -->
  </q-card>
</template>

<script setup>
import cmp_unitat from "./santRosari_unitat"

</script>

<style lang="css" scoped>
.borde {
	border: 2px solid #8b6060;
	border-radius: 10px;
}

</style>