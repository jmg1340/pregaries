<template>
  <div class="q-pa-md">
    <div class="text-h4 text-center q-mb-md titolPagina">
      Novena a santa Maria de Lurdes
    </div>


    <div class="q-pa-md" :style="{fontSize: storeApp.tamanyFont +'px'}">

      <jmgOracio class="col" clauOracio="laSenyal" />

    	<p>Nostra Senyora de Lourdes, Tu que et vas aparèixer a Berardette petita i senzilla pastora, li vas portar la llum resplendent del teu somriure i el dolç i radiant resplandor de la teva presència. Estem davant teu, pobres també nosaltres i et preguem humilment.</p>
      <p>Fes que aquells que dubten, descobreixin l'alegria de la confiança; fes que aquells que desesperen, sentin la teva discreta presència.</p>
      <p>Nostra Senyora de Lourdes, Tu que fas revelar a Bernardette el teu nom dient "Jo sóc la Immaculada Concepció", fes-nos descobrir l'alegria del perdó que sempre s'ofereix; posa en nosaltres el desig de la santedat i guia'ns cap Aquell que es la Font viva, Jesús, el teu fill, que ens ensenya a dir:</p>

      <br/>



      <jmgOracio class="col" clauOracio="pareNostre" />

      <jmgOracio class="col" clauOracio="aveMaria" textAdicional="
      (3 vegades)"/>

      <jmgOracio class="col" clauOracio="gloria" />



      <br/>

      <p class="text-italic text-grey-8"> - Demani's amb fervor i confiança la gràcia que es desitja obtenir amb la novena-</p>

      <br/>

      <!-- <q-expansion-item
        v-for="(dada, index) in dades" :key="'d'+index"
        group="somegroup3"
        :label="'Pregària del dia ' + dada.dia + ((dada.fet)? ' &nbsp;&nbsp;&nbsp;&nbsp; [ feta ] ': '')"
        :header-class="{'text-indigo bg-brown-1 q-mb-xs': !$q.dark.isActive, 'text-orange-2 bg-grey-10 q-mb-xs': $q.dark.isActive}"
				> -->
        <q-expansion-item
          v-for="(dada, index) in dades" :key="'d'+index"
          group="somegroup3"
          class="q-mb-xs"
          :header-class="{'text-indigo bg-brown-1': !$q.dark.mode, 'text-orange bg-grey-10': $q.dark.mode}"
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


      <jmgOracio class="col" clauOracio="sotaElVostreMantell" />

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
    { dia: 1, fet: false, text: "Reina Immaculada que, apareixent personalment qual majestuosa Senyora a la gruta de Lourdes, veu honrar amb vostra benigna mirada i amb la comunicació de vostres secrets a la pobre i malaltissa Berandette, tant menys estimada dels homes per la falta de tota cultura; obteniu per a nosaltres la gracia de que, posant sempre la nostra glòria en fer-nos agraïts al Senyor amb una vida conforme als nostres deures, ens fem al mateix temps mereixedors sempre de vostres especials benediccions. Amén."},
    { dia: 2, fet: false, text: "Oh Verge de Lourdes, escollida per Déu per ser Mare de Jesús, Tresorera de les divines gracies, refugi i advocada dels pecadors!. Postrat humilment als vostres peus us suplico que sigueu la meva guia i salut en aquesta vall de llàgrimes, perquè res puc ni haig de fer sense Vos. Doneu-me del vostre diví fill el perdó dels meus pecats, la perseverancia en el bé i la salvació de la meva ànima, per ser eternament feliç a la vostra dolça companyia en les mansions de la glòria. Amén."},
    { dia: 3, fet: false, text: "Oh Verge de Lourdes i Mare meva, vida i esperança dels orfes, àncora dels nàufregs, salud dels malalts i consol dels qui agonitzen i moren! Oh Mare meva! Després de Déu, Tu ets i seras la meva única esperança en les temptacions i perills, en la vida i a la hora de la meva mort. No em deixis, oh Maria! Amén."},
    { dia: 4, fet: false, text: "Oh Verge puríssima de Lourdes, vida de la meva ànima, alleujament de les meves penes, suavitat i dolçura de les meves afliccions! A les portes del vostre cor, oh Mare meva!, truca aquest pecador malalt, on el seu dolor, en aquest moment, és tan gran com els seus pecats; compadeix-te d'ell, no el rebutgis, mira-te'l amb ulls de compassió. Guareix-lo, com Jesús als leprosos. Gurareix-me per a que lloi a Déu eternament. Amén."},
    { dia: 5, fet: false, text: "Oh Verge de Lourdes i Reina dels àngels, els ulls dels quals brilla la fe que crema el vostre esperit! Ensenya'm a creure; però a creure obrant, perque la fe sense obres és morta; i plens de creients que no van obrar conforme a les seves creences, estan les presons de l'infern. Ajuda'm a creure la paraula divina i a obrar com Déu i l'Esglèsia em manen creure i obrar; pues la fe és llum i torxa que il·lumina la meva ànima i la condueix pel camí de la eterna benaurança. Amén."},
    { dia: 6, fet: false, text: "Oh Verge de Lourdes i Verge de les verges, assutena candidíssima, colom sense heil!. Vos, que fóreu concebuda sense pecah; Vos, que tant estimeu la castedat i tan voleu a vostres fills, tingueu compassió de mi i deslliura'ns d'aquesta concupiscència que em summergeix en un mar de pecats. Fes-me arribar de vostre Fill la gracia de la castedat per viure a la terra com els àngels del cel. Amén."},
    { dia: 7, fet: false, text: "Oh Verge de Lurdes y soberana Emperadriu dels cels, que, per amor a la pobresa us veu sometre a totes les privacions i escassetats dels pobres d'esperit!, ensenyeu-me a despreciar les abundancies y regals, i inspireu-me amor i compassió als pobres per aconseguir amb la limosna el regne dels cels. Amén."},
    { dia: 8, fet: false, text: "Oh Verge de Lurdes, exemplar sublim d'obediència, que fent-vos esclava del Senyor i humiliant-vos fins a viure sense propia voluntat, veu merèixer que us anomenessin beneïda totes les generacions! Ensenyeu-me i ajudeu-me, com a la nena Bernardette, a ser obedient fins al al mort, perque la obediència es millor que els sacrificis, i el qui sigueix obeïnt a Déu aconseguirà arribar fins al cel. Amén."},
    { dia: 9, fet: false, text: "Oh Verge de Lurdes, Reina dels màrtirs i consòl dels afligits! Per la heroica paciència que va resplendir en  tots els actes de vostra vida mortal, des de Betlem al Calvari, des de la Profecía de Simeó fins que us van arrancar dels baços el cadàver ensangrentat de vostre diví Fill, tingeu misericòrdia de mi i ajudeu-me a sobreportar amb cristiana ressignació el pes de les creus que el Senyor tingui a bé enviar-me, per llaurar la meva eterna felicitat en la glòria i viure en vostre dolça companyia per tots els segles. Amén."},
  ])


	onMounted(() => {
		try {
      console.log('$q.localStorage.getItem("keyArrNovenaStaMariaLurdes")', $q.localStorage.getItem("keyArrNovenaStaMariaLurdes"));
      const arr = JSON.parse($q.localStorage.getItem("keyArrNovenaStaMariaLurdes")) || [false, false, false, false, false, false, false, false, false]
      console.log("arr", arr)
			dades.value.forEach( (dada, index) => dada.fet = arr[index] )		// restablim els checks marcats

		} catch (error) {
			console.log("Error possiblement produit per 'keyArrNovenaStaMariaLurdes' NO DEFINIDA")
			console.log(error)
		}

	})



  const guardarFet = () => {
    let arrCheckNovenaStaMariaLurdes = dades.value.map( (dada) => dada.fet )
    console.log("arrCheckNovenaStaMariaLurdes", arrCheckNovenaStaMariaLurdes);
    try {
      $q.localStorage.set("keyArrNovenaStaMariaLurdes", JSON.stringify(arrCheckNovenaStaMariaLurdes))
    } catch (e) {
      console.log("ERROR AL GUARDAR localhost")
      console.log(e)
    }
  }

  const resetAll = () => {
    dades.value.forEach( (dada) => dada.fet = false )   // posem a false tots els valors
    $q.localStorage.remove("keyArrNovenaStaMariaLurdes")
  }




</script>

<style>
  /* body.body--dark {
    background-color: blue;
  } */

  /* .body--light {
    background-color: yellow;
  } */
</style>
