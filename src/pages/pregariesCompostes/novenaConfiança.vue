<template>
  <div class="q-pa-md">
    <div class="text-h4 text-center q-mb-md titolPagina">
      Novena de Confiança a la Verge del Carme
    </div>


    <div class="q-pa-md" :style="{fontSize: storeApp.tamanyFont +'px'}">

      
      <!-- <q-expansion-item 
        v-for="(dada, index) in dades" :key="'d'+index"
        group="somegroup3" 
        :label="'Pregària del dia ' + dada.dia + ((dada.fet)? ' &nbsp;&nbsp;&nbsp;&nbsp; [ feta ] ': '')" 
        :header-class="{'text-indigo bg-brown-1 q-mb-xs': !$q.dark.isActive, 'text-orange-2 bg-grey-10 q-mb-xs': $q.dark.isActive}"
				> -->
        <q-expansion-item 
          v-for="(dada, index) in dades" :key="'d'+index" 
          group="somegroup3"
          header-class="text-indigo bg-brown-1 q-mb-xs"
          >
        <template v-slot:header>
          <!-- <q-item-section avatar>
            <q-avatar icon="bluetooth" color="primary" text-color="white" />
          </q-item-section> -->
        
          <q-item-section>
            Pregària del dia {{dada.dia}}
          </q-item-section>
        
          <q-item-section side>
            <div class="row items-center">
              <q-icon v-if="dada.fet" name="verified" color="green" size="24px" />
            </div>
          </q-item-section>
        </template>

        <div class="q-pa-md ">
          {{ dada.text }}
        </div>
				<div>
					<q-checkbox v-model="dada.fet" label="Feta" @click="guardarFet"/>
				</div>
        
      </q-expansion-item>


			<div class="q-mb-md text-right"><q-btn noCaps dense color="negative" @click="resetAll">Reset</q-btn></div>	


      <p>
        <jmgOracio class="col" clauOracio="aveMaria" />
      </p>
      <br>
      <p>Verge Maria, Mare i Reina del Carmel.<br />
        Prega al teu fill per mi i per tota la humanitat perquè tots els homes arribem a
        assolir el cim de la perfecció que és Crist. Que viu i regna pels segles dels segles. <br />
        Amén.</p>
      

    </div>
  </div>
</template>

<script setup>
  import { useAppStore } from "../../stores/example-store.js";
  import jmgOracio from "../../components/oracio.vue";
  import { useQuasar } from "quasar";
  import { ref, onMounted } from "vue"

  const storeApp = useAppStore();
  const $q = useQuasar();


  let dades = ref([
    {
      dia: 1, fet: false, text: " Mare meva del Carme, Verge Puríssima, concediu-me la gràcia de ser pur i cast."},
    {
      dia: 2, fet: false, text: "Mare meva del Carme, et dono gràcies pels beneficis que m'has concedit. Augmenta en mi i en tots la virtut de la caritat."},
    {
      dia: 3, fet: false, text: "Mare meva del Carme, continua emparant-me amb la teva especial protecció; que arribi al cim, que és Crist."},
    {
      dia: 4, fet: false, text: "Mare meva del Carme, concedeix-me la gràcia que necessito i, sobre tot, feu que mori a la teva falda maternal."},
    {
      dia: 5, fet: false, text: "Mare meva del Carme, intercedeix pels meus difunts; pels meus éssers estimats i pel món sencer, especialment per: __________"},
  ])


	onMounted(() => {
		try {
      console.log('$q.localStorage.getItem("keyNovenaConfiança")', $q.localStorage.getItem("keyNovenaConfiança"));
      const arr = JSON.parse($q.localStorage.getItem("keyNovenaConfiança")) || [false, false, false, false, false, false, false, false, false]
      console.log("arr", arr)
			dades.value.forEach( (dada, index) => dada.fet = arr[index] )		// restablim els checks marcats	
			
		} catch (error) {
			console.log("Error possiblement produit per 'keyNovenaConfiança' NO DEFINIDA")
			console.log(error)
		}  

	})  



  const guardarFet = () => {
    let arrCheckNovenaStMiquelArcangel = dades.value.map( (dada) => dada.fet )
    console.log("arrCheckNovenaStMiquelArcangel", arrCheckNovenaStMiquelArcangel);
    try {
      $q.localStorage.set("keyNovenaConfiança", JSON.stringify(arrCheckNovenaStMiquelArcangel))
    } catch (e) {
      console.log("ERROR AL GUARDAR localhost")
      console.log(e)
    }			
  }

  const resetAll = () => {
    dades.value.forEach( (dada) => dada.fet = false )   // posem a false tots els valors
    $q.localStorage.remove("keyNovenaConfiança")
  }




</script>

<style>
</style>
