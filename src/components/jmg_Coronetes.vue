<template>
  <q-card class="q-pa-md q-mb-xl bg-brown-1">
    <!-- <div class="text-right q-mr-md q-mt-sm">
			<q-btn noCaps dense color="negative" @click="resetAll">Reset</q-btn>
		</div> -->

    <!-- <q-card-section v-for="(misteri, indexMisteri) in misteris" :key="misteri"> -->

    
	<div 
		v-for="n in 5" 
		:key="'c' +n" 
		class="q-my-lg"
		:style="{fontSize: storeApp.tamanyFont +'px'}"
	>
	
		<!-- <q-card> -->
			<q-card-section>
				<div class="borde q-pa-sm">
					Pare Etern jo us ofereixo  el preciosíssim Cos, la Sang, l'Ànima i la Divinitat del vostre estimadíssim Fill i Senyor Nostre Jesucrist, en expiació dels nostres pecats i pels del món sencer.
				</div>
			</q-card-section>
		<!-- </q-card> -->

    <div class="text-center">
			<q-card >
				<q-card-section>
    			<div class="text-grey-6 q-mb-md">10 vegades la següent pregària...</div>
					<div class="borde q-pa-sm">
						Oh bon Jesús, perdona els nostres pecats, deslliura'ns del foc de l'infern i porta al cel totes les ànimes, especialment les més necessitades de la teva misericòrdia.
					</div>
				</q-card-section>
					<div class="row q-gutter-md q-mb-sm justify-center">
						<!-- <cmp_unitat v-for="n in 10" :numero="n" :key="n" :ref="'m'+indexMisteri+'u'+n" /> -->
						<cmp_unitat
							v-for="n in 10"
							:numero="n"
							:key="n"
						/>
					</div>
				<q-card-section>
				</q-card-section>
			</q-card>
    </div>
	
	</div>	


    <!-- </q-card-section> -->
  </q-card>
</template>

<script setup>
import cmp_unitat from "components/rosari/santRosari_unitat"

import { useAppStore } from '../stores/example-store.js'
const storeApp = useAppStore()

</script>

<style lang="css" scoped>
.borde {
	border: 2px solid #8b6060;
	border-radius: 10px;
}

</style>