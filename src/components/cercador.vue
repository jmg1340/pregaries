<template>
  <!-- FORMULARI -->
  <div>
    <q-form @submit.prevent="cercar()" class="q-gutter-md">
      <div class="row">
        <q-input
					type="string"
          class="col lletraTaula"
          bg-color="grey-2"
					standout="bg-primary text-white"
          dense
					clearable
					outlined
          v-model="textABuscar"
          hint="Introduir un text"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Per favor, escriure un text',
          ]"
        />

        <div class="col-auto q-ml-md">
          <q-btn label="Cercar" type="submit" color="brown-10" />
        </div>
      </div>
    </q-form>
  </div>

  <!-- TAULA AMB RESULTATS -->
	<div class="q-mt-md q-ml-sm">Resultats de la cerca <span class="text-red-8">( {{ arrOracions.length }} )</span></div>
  <q-markup-table dense bordered class=" q-mx-sm" separator="cell" wrap-cells>
    <thead class="bg-grey-8 text-white">
      <tr>
        <th class="text-center lletraTaula">Oració</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(obj, index) in arrOracions"
        :key="`oracio-${index}`"
        @click="MostrarOracio(obj.clau)"
      >
        <td class="lletraTaula">
          {{ obj.titol }}
        </td>
      </tr>
    </tbody>
  </q-markup-table>
</template>

<script setup>
	import { useQuasar } from 'quasar'
	import { ref, onMounted,watch } from "vue";
	import { useRouter } from "vue-router";
	const router = useRouter();

	import objOracions from "../dades/oracions.json";

	let textABuscar = ref("");

	const $q = useQuasar()

	onMounted(() => {
		// recupera de localStorage el valor de la variable 'textABuscar'
		textABuscar.value = $q.localStorage.getItem('textCerca') === 'null' ? '' : $q.localStorage.getItem('textCerca')

		// si la variable te contingut, fa la cerca
		if ( textABuscar.value !== '') cercar()
	})

	watch( textABuscar, async (newtextABuscar, oldtextABuscar) => {
		// guarda a localStorage la variable 'textABuscar'
		$q.localStorage.set("textCerca", newtextABuscar)
	})



	const arrClausOracions = Object.keys(objOracions);

	const arrCatClauTitolText = [];
	arrClausOracions.forEach((clau) => {
		arrCatClauTitolText.push({
			categoria: objOracions[clau].categoria,
			clau: clau,
			titol: objOracions[clau].titol,
			arrText: objOracions[clau].arrText,
		});
	});

	let arrOracions = ref([]);


	let cercar = () => {
		let arrResultat = [];

		const re = new RegExp(textABuscar.value, 'i');

		arrCatClauTitolText.forEach(function (obj) {
			var titolSenseAccents = senseAccents(obj.titol);
			if (re.test(titolSenseAccents)) {
				// 1er: busquem pel titol de la cançó
				arrResultat.push({ titol: obj.titol, clau: obj.clau });
			} else {
				// 2on: busquem per la lletra de la cançó
				let oracioTrobada = false;
				for (let linia of obj.arrText) {
					var liniaSenseAccents = senseAccents(linia);

					if (re.test(liniaSenseAccents)) {
						arrResultat.push({ titol: obj.titol, clau: obj.clau });
						oracioTrobada = true;
						break;
					}
				}
			}
		});

		arrOracions.value = arrResultat;

		// return [];
	};

	const senseAccents = function (s) {
		var r = s.toLowerCase();
		//r = r.replace(new RegExp(/\s/g),"");
		r = r.replace(new RegExp(/[àáâãäå]/g), "a");
		r = r.replace(new RegExp(/[èéêë]/g), "e");
		r = r.replace(new RegExp(/[ìíîï]/g), "i");
		//r = r.replace(new RegExp(/ñ/g),"n");
		r = r.replace(new RegExp(/[òóôõö]/g), "o");
		r = r.replace(new RegExp(/[ùúûü]/g), "u");

		return r;
	};

	const MostrarOracio = (clau) => {
		router.push("/pregaria/" + clau);
	};
	
</script>



<style lang="scss" scoped>
	.lletraTaula { 
		font-size: 15px;
	}
</style>