<template>
  <!-- <q-card>
    <q-card-section> -->
     <div>
        <div class="text-h6 text-center tipusLletraTitolOracio" :class="{'text-red-10': !$q.dark.mode, 'text-orange': $q.dark.mode}">
          <span class="text-uppercase">{{ objOracions[clauOracio].titol }}</span>
          {{ textAdicional }}
        </div>
        <!-- <q-separator spaced></q-separator> -->
      <div :class="{clRequadre_clar: !$q.dark.mode, clRequadre_fosc: $q.dark.mode}" class="q-pa-md clRequadre">
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
  import { useQuasar } from 'quasar'

	const storeApp = useAppStore()
  const $q = useQuasar()


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
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .clRequadre_clar {
    background-color: $colorbgOracio;
  }
  .clRequadre_fosc {
    background-color: rgb(31, 31, 31);
  }

</style>
