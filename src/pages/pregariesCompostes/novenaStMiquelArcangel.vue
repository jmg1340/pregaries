<template>
  <div class="q-pa-md">
    <div class="text-h4 text-center q-mb-md titolPagina">
      Novena a sant Miquel Arcàngel
    </div>


    <div class="q-pa-md" :style="{fontSize: storeApp.tamanyFont +'px'}">

      <jmgOracio class="col" clauOracio="laSenyal" />

    	<p>Sant Miquel Arcàngel, no ens desemparis ni de nit ni de dia, protegeix-nos en tots els nostres camins dels atacs dels esperits malignes i dels seus agents del mal; guia'ns pel bon camí, vine al nostre auxili quan ens sentis defallir; prepara'ns i instrueix-nos en el combat espiritual i ajuda'ns a no desviar-nos del camí del bé i a romandre units en la pregària a nostra Senyora i Reina Maria, per a que tots junts com una sola família esperem el retorn triomfal del nostre salvador.</p>

      <p class="text-italic"> - Demani's amb fervor i confiança la gràcia que es desitja obtenir amb la novena-</p>

      <p class="text-italic"> Es resen un Parenostre, tres Avemaries i un Glòria</p>

      <q-expansion-item 
        v-for="(dada, index) in dades" :key="'d'+index"
        group="somegroup3" 
        :label="'Pregària del dia ' + dada.dia + ((dada.fet)? ' &nbsp;&nbsp;&nbsp;&nbsp; [ feta ] ': '')" 
        :header-class="{'text-indigo bg-brown-1 q-mb-xs': !$q.dark.isActive, 'text-orange-2 bg-grey-10 q-mb-xs': $q.dark.isActive}"
				>
        <div class="q-pa-md ">
          {{ dada.text }}
        </div>
				<div>
					<q-checkbox v-model="dada.fet" label="Feta" @click="guardarFet"/>
				</div>
        
      </q-expansion-item>


			<div class="q-mb-md text-right"><q-btn noCaps dense color="negative" @click="resetAll">Reset</q-btn></div>	


      <br>

      <jmgOracio class="col" clauOracio="ohGloriosSanMiquel" />

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
    { dia: 1, fet: false, text: "Maria Immaculada, Mare i dolça Mitjancera, Reina dels Cels, humilment et supliquem que intercedeixis per nosaltres. Prega a Déu que enviï a Sant Miquel i als seus àngels per apartar els obstacles que s'oposen al regnat del Sagrat Cor en el món."},
    { dia: 2, fet: false, text: "Sant Miquel, Arcàngel dels Sants combats, us ofereixo les meves lloances i devoció per la inefable complacència amb que Déu us mira com a defensor de la seva glòria. Amén."},
    { dia: 3, fet: false, text: "Sant Miquel, Arcàngel de la Victòria, amb devoció us lloo per l'alegria amb que Nostre Senyor Jesucrist us veu com gelós defensor de la seva divinitat i les victòries que aconseguiu sobre els enemics de les nostres ànimes. Amén."},
    { dia: 4, fet: false, text: "Sant Miquel, Ministre de l'Altíssim, amb devoció us lloo per la tendresa amb que us mira la Santíssima Verge Maria mirant els combats que heu lliurat i lliureu sense parar per establir el regnat del seu estimat Fill, Déu i Redentor nostre, en el món. Amén."},
    { dia: 5, fet: false, text: "Sant Miquel, Guardià del Cel, us lloo amb devoció per la veneració, l'amor y l'honor que us rendeixen les jerarquies celestials de les quals sou august Príncep. Amén."},
    { dia: 6, fet: false, text: "Sant Miquel, Arcàngel del Sant Sacrifici, us lloo amb devoció per l'honor que us ha fet nostre Senyor Jesucrist que us ha confiat la custodia de l'Església, la seva estimada esposa, i us ofereixo el reconeixement i amor que la Santa Església us professa. Amén."},
    { dia: 7, fet: false, text: "Sant Miquel, Portador de l'estendard de salvació, us ofereixo les meves lloances amb devoció per la important missió que Déu us a donat al confiar-vos les ànimes de tots els predestinats, defensant-les en la hora de la mort dels assalts de l'infern, presentant-les davant Déu sencerament pures. Amén."},
    { dia: 8, fet: false, text: "Sant Miquel, Arcàngel de la Pau, us lloo amb devoció per tota la força, la dolçura i suavitat que hi ha dins del vostre sant nom, delicia de vostres veritables devots. Amén."},
    { dia: 9, fet: false, text: "Sant Miquel, Arcàngel del Perdó, us lloo amb devoció pel immensos beneficis que heu vessat sobre nostra Patria, sempre que aquesta hagi estat fidel a Déu, així com per l'abnegació, reconeixement i amor que us rendeixen els vostres servidors. Digneu-vos, us supliquem, que dels Cors de Jesús i de Maria, augmentin vostres devots per obtenir la salvació. Amén."},
  ])


	onMounted(() => {
		try {
      console.log('$q.localStorage.getItem("keyArrNovenaStMiquelArcangel")', $q.localStorage.getItem("keyArrNovenaStMiquelArcangel"));
      const arr = JSON.parse($q.localStorage.getItem("keyArrNovenaStMiquelArcangel")) || [false, false, false, false, false, false, false, false, false]
      console.log("arr", arr)
			dades.value.forEach( (dada, index) => dada.fet = arr[index] )		// restablim els checks marcats	
			
		} catch (error) {
			console.log("Error possiblement produit per 'keyArrNovenaStMiquelArcangel' NO DEFINIDA")
			console.log(error)
		}  

	})  



  const guardarFet = () => {
    let arrCheckNovenaStMiquelArcangel = dades.value.map( (dada) => dada.fet )
    console.log("arrCheckNovenaStMiquelArcangel", arrCheckNovenaStMiquelArcangel);
    try {
      $q.localStorage.set("keyArrNovenaStMiquelArcangel", JSON.stringify(arrCheckNovenaStMiquelArcangel))
    } catch (e) {
      console.log("ERROR AL GUARDAR localhost")
      console.log(e)
    }			
  }

  const resetAll = () => {
    dades.value.forEach( (dada) => dada.fet = false )   // posem a false tots els valors
    $q.localStorage.remove("keyArrNovenaStMiquelArcangel")
  }




</script>

<style>
</style>
