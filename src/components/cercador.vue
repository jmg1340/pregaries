<template>
  <!-- FORMULARI -->
  <div>
    <q-form @submit.prevent="cercar()" class="q-gutter-md">
      <div class="row">
        <q-input
					type="string"
          class="col"
          filled
          dense
					clearable
          v-model="textABuscar"
          hint="Introduir un text"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Per favor, escriure un text',
          ]"
        />

        <div class="col-auto q-ml-md">
          <q-btn label="Cercar" type="submit" color="primary" />
        </div>
      </div>
    </q-form>
  </div>

  <!-- TAULA AMB RESULTATS -->
	<div class="q-mt-md">Resultats de la cerca</div>
  <q-markup-table dense bordered class="q-mx-sm" separator="cell">
    <thead class="bg-grey-8 text-white">
      <tr>
        <th class="text-center thCansoner">Oració</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(obj, index) in arrOracions"
        :key="`oracio-${index}`"
        @click="MostrarOracio(obj.clau)"
      >
        <td class="">
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
	textABuscar.value = $q.localStorage.getItem('textCerca') === 'null' ? '' : $q.localStorage.getItem('textCerca')
	if ( textABuscar.value !== '') cercar()
})

watch( textABuscar, async (newtextABuscar, oldtextABuscar) => {
	$q.localStorage.set("textCerca", newtextABuscar)
})




const columnes = ref([
  {
    name: "oracio",
    label: "oració",
    field: "titol",
    align: "left",
    sortable: true,
  },
]);

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
      // for (let objLletra of objCansoner[obj.idCanso][obj.idioma].lletra) {
      for (let linia of obj.arrText) {
        var liniaSenseAccents = senseAccents(linia);

        if (re.test(liniaSenseAccents)) {
          arrResultat.push({ titol: obj.titol, clau: obj.clau });
          oracioTrobada = true;
          break;
        }
      }
      // if (oracioTrobada) break;
      // }
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