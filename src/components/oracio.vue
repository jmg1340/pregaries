<template>
  <!-- <q-card>
    <q-card-section> -->
     <div> 
			<div v-if="objOracions[clauOracio].titol !== ''">
        <div class="text-h6 text-red-10 text-center tipusLletraTitolOracio">
          <span class="text-uppercase">{{ objOracions[clauOracio].titol }}</span>
          {{ textAdicional }}
        </div>
        <!-- <q-separator spaced></q-separator> -->
      </div>
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
	 * Formateja cada linia del array de la oració
	 */
	const liniaFormatada = (linia) => {
		if (linia.trim() === '') {
			return ('\xa0') 	// provat amb '\xa0', '&nbsp;' i ' '   -> NO FUNCIONA
		} else if (/^\*negreta\*/.test( linia )) {
			return `<span class="text-bold"> ${ linia.substring( 9 ) } </span>`;
		} else {
			return linia;
		}
	}


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