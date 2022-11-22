<template>
  <!-- <q-card>
    <q-card-section> -->
     <div> 
        <div class="text-h6 text-red-10 text-center tipusLletraTitolOracio">
          <span class="text-uppercase">{{ objOracions[clauOracio].titol }}</span>
          {{ textAdicional }}
        </div>
        <!-- <q-separator spaced></q-separator> -->
      <div class="q-pa-md clRequadre">
        <div
          v-for="(linia, index) in objOracions[clauOracio].arrText"
          :key="clauOracio + '_' + index"
					:style="{fontSize: storeApp.tamanyFont +'px'}"
					
        >
					<span v-html="liniaFormatada(linia)"></span>
          <!-- {{ (linia.trim() === '') ? '&nbsp;' : linia }} -->
					<!-- {{ liniaFormatada( linia )}} -->
        </div>
      </div>
		</div>
    <!-- </q-card-section>
  </q-card> -->
</template>

<script setup>
	import objOracions from "../dades/oracions.json";
	import { useAppStore } from '../stores/example-store.js'
	const storeApp = useAppStore()


	const props = defineProps({
		clauOracio: {
			type: String,
		},
		textAdicional: {
			type: String,
			default: "",
		},
	});



	/**
	 * posar linia en blanc cas de que n'hi hagi
	 */
	const liniaFormatada = (linia) =>  (linia.trim() === '') ? ('\xa0') : linia	




</script>

<style lang="scss" scoped>
.clRequadre {
    border: 1px solid grey;
    border-radius: 10px;
    background-color: $colorbgOracio;
    margin-top: 10px;
    margin-bottom: 20px;
  }


</style>