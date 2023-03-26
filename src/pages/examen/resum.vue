<template>
      <!-- <q-card>

        <q-card-section
        v-for="(numM) in Object.keys(manamentsAmbChecks)"
        >
        <div class="text-h6 text-bold">
          <span class="text-red"> {{ numM }} - </span>
          {{ manamentsAmbChecks[numM].manament }}
        </div> -->

          <q-list bordered dense separator
          v-for="(numM) in Object.keys(opcionsSeleccionades)"
          class="q-mb-lg"
          >
          <q-item-label header
            class="text-h6"
            :class="{'text-red-10': !$q.dark.mode, 'text-orange': $q.dark.mode}"
            >
              {{ numM }} - {{ manamentsAmbChecks[numM].manament }}
            </q-item-label>


            <q-item
            v-for = "(item, index) in opcionsSeleccionades[numM].examen"
            >
            <q-checkbox v-model="item.checked" :label="item.pregunta" @click = "guardaOpcio(numM, index)"/>
            </q-item>
          </q-list>


        <!-- </q-card-section>

      </q-card> -->

</template>


<script setup>
  import ecjson from '../../dades/examenConsciencia.json'
  import { ref, toRef, toRefs, isRef, watch, onMounted, computed } from 'vue'
	import { useQuasar } from 'quasar'
	import { useAppStore } from '../../stores/example-store.js'

	const storeApp = useAppStore()
	const $q = useQuasar()

  const tab= ref("examen")
  const manamentsAmbChecks = ref({})



  onMounted ( () => {

    Object.keys(ecjson.manaments).forEach( (numM) => {
      const arrObjCheckPregunta  = ecjson.manaments[numM].examen.map( element => ({checked: false, pregunta: element}))
      const objManamentExamen = {
        manament: ecjson.manaments[numM].manament,
        examen: arrObjCheckPregunta
      }
      console.log("objManamentExamen", objManamentExamen)
      manamentsAmbChecks.value[numM] = objManamentExamen
    })
    // console.log("manamentsAmbChecks", manamentsAmbChecks)


    // --- marquem check a partir de les opcions guardades al localstorage ---

    const arrExamen = storeApp.arrExamen
    arrExamen.forEach ( (obj => {
      manamentsAmbChecks.value[obj.numMan].examen[obj.idxPregunta].checked = true
    }))

  })


  // --- filtrar nomes les opcions marcades ---
  const opcionsSeleccionades = computed( () => {
    let nouObj = {}
    Object.keys(manamentsAmbChecks.value).forEach( numM => {
      if (manamentsAmbChecks.value[numM].examen.some( obj => obj.checked )){
        const subObj = {
          manament: manamentsAmbChecks.value[numM].manament,
          examen: manamentsAmbChecks.value[numM].examen.filter( obj => obj.checked )
        }
        console.log("subObj", subObj)

        nouObj[numM] = subObj
      }
    })

    return nouObj

  })


  const guardaOpcio = (numM, index) => {
    let arr = []
    Object.keys(manamentsAmbChecks.value).forEach( numM => {
      manamentsAmbChecks.value[numM].examen.forEach( (item, index) => {
        if (item.checked) {
          arr.push({numMan: numM, idxPregunta: index})
        } else {
          // elimina la opció si existeix a l'array
          arr = arr.filter ( obj => JSON.stringify(obj) !== JSON.stringify( {numMan: numM, idxPregunta: index} ))
        }
      })
    })


    storeApp.arrExamen = arr;
    $q.localStorage.set("arrExamen", JSON.stringify(storeApp.getArrExamen()));
  }


</script>


<style>

</style>
