<template>
	<div class="q-pa-md">
		<div class="text-center q-mb-md">
			<div class="text-h5">20 VERITATS ESPIRITUALS</div>
			<div class="caption text-grey">font: <span class="text-italic">www.libertadencristo.org</span></div>
		</div>
		<q-list separator>
			<q-item v-for="(obj, index) in vintVeritats" :key="index" class="q-my-lg">
				<q-item-section>
						<q-item-label
						:style="{fontSize: storeApp.tamanyFont +'px'}"
						> {{ index + 1}}. {{ obj.veritat }} </q-item-label>
						<q-item-label 
						caption
						:style="{fontSize: storeApp.tamanyFont +'px'}"
						v-html="obj.paraulaDeu"></q-item-label>
				</q-item-section>
			</q-item>
			<!-- <q-separator spaced inset /> -->
		</q-list>
	</div>
</template>


<script setup>
	import { ref, onMounted, onUnmounted } from "vue";
	import { useAppStore } from '../../stores/example-store.js'

	const storeApp = useAppStore()

	const vintVeritats = ref([
		{
			veritat: "Com puc dir que soc dèbil, si la Biblia em diu que tot ho puc a traves de Jesucrist, que m'enforteix?",
			paraulaDeu: "Filipencs 4,13 'Em veig capaç de tot gràcies a aquell qui em fa fort'"
		},
		{
			veritat: "Què em pot faltar, si sé que Déu em proveirà de tot el que necessito i m'omple de glòria en Jesucrist?",
			paraulaDeu: "Filipencs 4,19: 'El meu Déu satsifarà totes les vostres necessitats segons la mesura de la seva riquesa, donat-vos la glòria en Jescucrist'"
		},
		{
			veritat: "Per què he de tenir por, si la Bíblia dfirma que Déu no m'ha donat un esperit de termor; sino de poder, d'amor i de domini propi?",
			paraulaDeu: `2ª Timoteu 1,7: "Déu no ens ha donat un esperit de covardia, sinó un esperit de fortalesa d'amor i de seny."`
		},
		{
			veritat: `Per què sento que no tinc prou fe per dur a terme la missió que tinc encomanada, si Déu m'ha donat la mida de fe que necessito?`,
			paraulaDeu: `Romans 12,3: "En virtut de la gràcia que he rebut, dic a tots i cada un: no us tingueu per més del que sou; tingueu una idea justa de vosaltres mateixos, assenyadament, sense ambicions, cadascú segons la mesura de la fe que Dúe li ha concedit"`
		},
		{
			veritat: `Per què m'he de sentir dèbil, si la Bíblia diu que el Senyor és el baluart de la meva vida i que tindré forces perque conec Déu.`,
			paraulaDeu: `Salm 27,1: "El Senyor m'ilumina i em salva: qui em pot fer por? El Senyor és el mur que em protegeix la meva vida: qui em pot esfereir"<br>
			<br>
			Daniel 11,32: "Amb afalacs farà apostatar els transgressors de l'aliança, però el poble dels qui coneixen el seu Déu actuarà amb fermesa i triomfarà"`
		},
		{
			veritat: `Per què he de permetre que Satanàs domini la meva vida, si el qui està en mi, Déu, és més poderós que el maligne?`,
			paraulaDeu: `1 Joan 4,4: "Vosaltres, fills meus, sou de Déu i heu vençut els falsos profetes, perquè el qui està en vosaltres és més poderós que el qui està en el món."`
		},
		{
			veritat: `Per què he d'acceptar la derrota, si la Bíblia declara que, a través de Jesucrist, Déu sempre em porta triomfant?`,
			paraulaDeu: `2 Corintis 2,14: "Donem gràcies a Déu, que, en el Crist, sempre ens porta en el seu seguici triomfal i, per mitjà nostre, escampa atot arreu la bona olor del seu coneixement"`
		},
		{
			veritat: `Com em pot faltar la saviesa, si Déu ha fet que Jeuscrist sigui la meva saviesa y me la dona generosament quan jo l'hi demano?`,
			paraulaDeu: `1 Corintis 1,30: "Es gràcies a ell que vosaltres esteu units a Jesucrist, ja que Déu ha fet d'ell la nostra saviesa, la nostra justícia, la nostra santificació i la nostra redempció" <br><br>
			
			Jaume 1,5: "Si algun de vosaltres li manca saviesa, que la demani a Déu, i Déu, que dóna generosament a tothom, sense retreure res, la hi concedirà" <br><br>
			
			Lluc 21,15: "Jo mateix us donaré una eloqüència i una saviesa que no podran contradir ni resistir cap dels vostres adversaris"`
		},
		{
			veritat: `Per què m'he de sentir deprimit/da, si puc recordar que m'abracen l'amor, la compassió, la fidelitat i l'esperança de Déu?`,
			paraulaDeu: `Lamentacions 3,21-23: "Però vull reocrdar això que em dóna nova esperança: Encara som vius per l'amor del Senyor, la seva misericòrdia no s'esgota. La renoves cada dia. Oh, quina fidelitat!"`
		},
		{
			veritat: `Per què he d'estar preocupat/da o nerviós/a, si puc descarregar en Jesucrist tota la meva ansietat perquè Ell té cura de mi?`,
			paraulaDeu: `1 Pere 5,7: "Descarregueu en ell totes les vostres preocupacions, ja que ell mateix té cura de vosaltres"`
		},
		{
			veritat: `Per què he de viure esclavitzat/da, si sé que arreu on hi ha l'Esperit del Senyor hi ha llibertat?`,
			paraulaDeu: `2 Corintis 3,17: "Quan diu el Senyor, és com si digués l'Esperit, i on hi ha l'Esperit del Senyor hiha llibertat"`
		},
		{
			veritat: `Per què m'he de sentir condemmant/da, si la Bíblia diu que no tinc cap condemnació perquè estic unit/da a Jesucrist?`,
			paraulaDeu: `Romans 8, 1-2: "Ara ja no pesa cap mena de condemna sobre els qui viuen en Jesucrist, perquè la llei de l'Esperit, que dóna vida en Jesucrist, t'ha alliberat de la llei del pecat i de la mort"`
		},
		{
			veritat: `Per què m'he de sentir sol/a, si Jesús ha dit que sempre estarà amb mi i que no m'abandonarà mai?`,
			paraulaDeu: `Mateu 28,20: "i ensenyant-los a guardar tot allò que us he manat. Jo sóc amb vosaltres dia rere dia fins a la fi del món."`
		},
		{
			veritat: `Per què m'he de sentir víctima de la mala sort, si la Bíblia afirma que Jesucrist em va rescatar de la maledicció de la llei per a que jo pogués rebre el seu Esperit?`,
			paraulaDeu: `Gàlates 3, 13-14: "Crist ens va redimir de la maledicció de la llei, esdevenint maledicció en lloc de nosaltres, perquè està escrit: maleït tot aquell que penja d'una fusta; afi que la benedicció d'Abraham en Jesucrist arribés als gentils, a fí que rebéssim la promesa de l'Esperit per mitjà de la fe."`
		},
		{
			veritat: `Per què m'he de sentir insatisfet/a si, com Sant Pau, puc aprendre a estar satsfet/a en qualsevol situació?`,
			paraulaDeu: `Filipencs 4,11-13: "No vull pas dir qu en aquests moments passi necessitat, perquè ja he après a acontentar-me en qualsevol situació. Sé viure enmig de privacions i sé viure en l'abundància. Estic avesat a tot: a menjar molt i a patir gana, aviure en l'abundor i a passar necessitat. Em veig capaç de tot gràcies a aquell qui em fa fort."`
		},
		{
			veritat: `Per què m'he de sentir indigne/a, si Déu va tractar Jesús com si fos pecador per a que, a través d'Ell, jo rebés la justícia de Déu?`,
			paraulaDeu: `2 Corintis 5,21: "Al qui no havia experimentat el pecat, Déu, per nosaltres, li va carregar el pecat, perquè gràcies a  ell experimentéssim la seva justícia salvadora"`
		},
		{
			veritat: `Per què he de sentir paranoia si sé que ningú pot anar contra meu perquè Déu està de part meva?`,
			paraulaDeu: `Romans 8-31: "Si tenim Déu amb nosaltres, qui tindrem en contra?"<br><br>
			
			Salm 56, 10-12: "Es faran enrere els enemics el dia que t'invocaré, Déu meu; llavors sabré que tu m'afavoreixes. Celebro les promeses de Déu, lloo el Senyor per les seves promeses; confio en ell, no tinc por de res. Què pot fer-me un home?"`
		},
		{
			veritat: `Per què he de sentir confusió, si Déu és l'autor de la pau i Ell em dona enteniment pel seu Esperit?`,
			paraulaDeu: `1 Corintis 14,33: "Déu no es un Déu de desordre, sinó de pau"<br><br>
			
			1 Corintis 2,12: "I nosaltres no hem rebut l'esperit del món, sinó l'Esperit qe ve de Déu, perquè coneguem els dons que Déu ens ha concedit."`
		},
		{
			veritat: `Per què m'he de sentir fracassat/da si sóc més que vencedor/a per mitjà de Jescucrist, que em va estimar?`,
			paraulaDeu: `Romans 8,37-39: "de tot això, en sortim plenament vencedors gràcies a aquell qui ens estima. N'estic cert: ni la mort ni la vida, ni els àngels ni les potències,ni el present ni el futur, ni els poders, ni el món de dalt ni el de sota, ni res de l'univers creat no ens podrà seprarar de l'amor de Déu que s'ha manifestat en Jeuscrist, Senyor nostre."`
		},
		{
			veritat: `Per què he de permetre que m'agobiïn les pressions de la vida, si sé que Jesús ha vençut tot mal amb les seves afliccions?`,
			paraulaDeu: `Joan 16,33: "Us he dit tot això perquè en mi trobeu la pau. En el món passareu tribulacions, però tingueu confiança: jo he vençut el món."`
		}
	])

  onMounted(() => {
    storeApp.setToolBar(true); // tamanyLletra.vue visible
		storeApp.setMostrarIconaFavorits( false )
  });

  onUnmounted(() => {
    storeApp.setToolBar(false); // barraIcones.vue invisible
		storeApp.setMostrarIconaFavorits( true )
  });


</script>


<style lang="css">

</style>