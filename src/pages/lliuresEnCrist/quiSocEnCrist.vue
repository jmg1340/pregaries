<template>
	<div class="q-pa-md">
		<div class="text-center q-mb-md">
			<div class="text-h5">QUI SOC EN CRIST?</div>
			<div class="caption text-grey">font: <span class="text-italic">www.libertadencristo.org</span></div>
		</div>



		<q-card>
			<q-tabs
				v-model="tab"
				dense
				class="text-grey"
				active-color="primary"
				indicator-color="primary"
				align="justify"
				narrow-indicator
			>
				
				<q-tab 
				v-for="(str, index) in ['importancia', 'seguretat', 'acceptacio']" :key="index"
				:name="str" :label="str" class="text-negative "/>
			</q-tabs>

			<q-separator />

			<q-tab-panels v-model="tab" animated>
				<q-tab-panel :name="tab">
					<div 
					class="text-bold"
					:style="{fontSize: storeApp.tamanyFont +'px'}"
					> 
						{{ caracteristiques[tab].renuncia }}
					</div>
					
					<q-list separator>
						<q-item v-for="(objSoc, index) in caracteristiques[tab].soc" :key="index" class="q-my-sm">
							
							<q-item-section avatar>
								<q-icon color="negative" name="label_important" />
							</q-item-section>
								
							<q-item-section>
								<q-item-label 
									caption
									:style="{fontSize: storeApp.tamanyFont +'px'}"
									>
									<div v-html="objSoc.text" class="q-mb-sm text-indigo-10 text-bold"/>
									<div v-html="objSoc.cita" class=""/>			
								</q-item-label>
							</q-item-section>
						</q-item>
					</q-list>

				</q-tab-panel>

			</q-tab-panels>
		</q-card>










	</div>
</template>


<script setup>
	import { ref, onMounted, onUnmounted } from "vue";
	import { useAppStore } from '../../stores/example-store.js'

	const storeApp = useAppStore()
	const tab = ref("importancia")

	const caracteristiques = ref({
		"importancia": {
			renuncia: "Renuncio a la mentida que diu que soc insignificant, inadequat/da i un cas perdut. EN CRIST soc MOLT IMPORTANT i ESPECIAL. Déu em diu que:",
			soc: [
				{
					text: `Soc la sal de la terra i la llum del món. `,
					cita: `[Mt 5,13.14]: »Vosaltres sou la sal de la terra. Si la sal perd el gust, amb què la tornaran salada? Ja no és bona per a res, sinó per a llençar-la fora i que la gent la trepitgi.
14»Vosaltres sou la llum del món. No es pot amagar una ciutat posada dalt d’una muntanya`
				},
				{
					text: `Soc una branca de la vinya veritable, unit/da a Crist, i un conducte de la seva vida. `,
					cita: `[Jn 15,15]: Ja no us dic servents, perquè el servent no sap què fa el seu amo. A vosaltres us he dit amics perquè us he fet conèixer tot allò que he sentit del meu Pare.`
				},
				{
					text: `M'ha escollit i m'ha designat per donar fruit. `,
					cita: `[Jn 15,16]: No m’heu escollit vosaltres a mi; sóc jo qui us he escollit a vosaltres i us he confiat la missió d’anar pertot arreu i donar fruit, i un fruit que duri per sempre. I tot allò que demanareu al Pare en nom meu, ell us ho concedirà.`
				},
				{
					text: `Soc testimoni personal de Crist, capacitat/da per l'Esperit Sant. `,
					cita: `[Ac 1,8]: Però vosaltres, quan l’Esperit Sant vindrà damunt vostre, rebreu una força que us farà testimonis meus a Jerusalem, a tot Judea, a Samaria i fins a l’extrem de la terra.`
				},
				{
					text: `Soc temple de Déu `,
					cita: `[1Cor 3,16]: ¿No sabeu que sou temple de Déu i que l’Esperit de Déu habita en vosaltres?`
				},
				{
					text: `Estic en pau amb Ell i m’ha encarregat treballar per a que altres trobin la pau en Ell. Soc ministre de  reconciliació. `,
					cita: `[2Cor 5,17-21]: És a dir, els qui viuen en Crist són una creació nova. El que era antic ha passat; ha començat un món nou. I tot això és obra de Déu, que ens ha reconciliat amb ell mateix per Crist i ens ha confiat a nosaltres aquest servei de la reconciliació.<br> Efectivament, Déu, en Crist, reconciliava el món amb ell mateix, no tenint-li més en compte els seus pecats, i a nosaltres ens ha encomanat l’anunci de la reconciliació. Per tant, som ambaixadors de Crist, i Déu mateix us exhorta a través nostre. Us ho demanem en nom de Crist: reconcilieu-vos amb Déu! Al qui no havia experimentat el pecat, Déu, per nosaltres, li va carregar el pecat, perquè gràcies a ell experimentéssim la seva justícia salvadora.`
				},
				{
					text: `Soc col·laborador/a de Déu. `,
					cita: `[2Cor 6,1]: Com a col·laboradors de Déu, us exhortem a no deixar perdre la gràcia que n’heu rebut.`
				},
				{
					text: `Estic assegut/da en llocs celestials amb Jesucrist. `,
					cita: `[Ef 2,6]: Per mitjà de Jesucrist, Déu ens ha ressuscitat amb ell i ens ha entronitzat dalt al cel juntament amb ell`
				},
				{
					text: `Soc imatge de Déu, creat/da per fer bones obres. `,
					cita: `[Ef 2,10]: Som obra seva: Déu ens ha creat en Jesucrist, i ens ha destinat a realitzar les bones obres que ell mateix havia preparat perquè visquéssim practicant-les.`
				},
				{
					text: `Puc apropar-me a Déu amb llibertat i confiança. `,
					cita: `[Ef 3,12]: Gràcies a ell, tenim plena llibertat d’acostar-nos a Déu amb la confiança que ens dóna la nostra fe en Crist.`
				},
				{
					text: `Tot ho puc per mitjà de Crist que m’enforteix. 	`,
					cita: `[Fil 4,13]: Em veig capaç de tot gràcies a aquell qui em fa fort.`
				}
			],
		},
		"seguretat": {
			renuncia: "Renuncio a la mentida que diu que soc culpable, que estic desprotegit/da, sol/a o abandonat/da. EN CRIST TINC PLENA SEGURETAT. Déu em diu que,",
			soc: [
				{
					text: `Soc lliure de condemna (càstig). `,
					cita: `[Rm 8,1-2]: Ara, doncs, ja no hi ha cap mena de condemna per als qui viuen en Jesucrist, 2perquè la llei de l’Esperit, que dóna la vida en Jesucrist, t’ha alliberat de la llei del pecat i de la mort.`
				},
				{
					text: `Tinc la seguretat que totes les coses cooperen per al meu bé (per al bé dels que estimen Déu). `,
					cita: `[Rm 8,28]: Sabem que Déu ho disposa tot en bé dels qui l’estimen, dels qui ell ha decidit cridar`
				},
				{
					text: `Soc lliure de qualsevol acusació contra mi.`,
					cita: `[Rm 8,31-34]: Què direm, doncs, davant d’això? Si tenim Déu amb nosaltres, qui tindrem en contra? Ell, que no va plànyer el seu propi Fill, sinó que el va entregar per tots nosaltres, com no ens ho donarà tot juntament amb ell? Qui s’alçarà per acusar els elegits de Déu, si Déu mateix els fa justos?`
				},
				{
					text: `Res no em pot separar de l’Amor de Déu. `,
					cita: `[Rm 8,35-39]: Qui ens separarà de l’amor de Crist? ¿La tribulació, l’angoixa, la persecució, la fam, la nuesa, el perill, l’espasa? Tal com diu l’Escriptura: És per tu que anem morint tot el dia, i ens tenen com anyells duts a matar. Però, de tot això, en sortim plenament vencedors gràcies a aquell qui ens estima. N’estic cert: ni la mort ni la vida, ni els àngels ni les potències, ni el present ni el futur, ni els poders, ni el món de dalt ni el de sota, ni res de l’univers creat no ens podrà separar de l’amor de Déu que s’ha manifestat en Jesucrist, Senyor nostre.`
				},
				{
					text: `Déu m’ha afirmat, ungit i segellat. `,
					cita: `[2Co 1,21-22]: És Déu mateix qui ens ha ungit i ens referma en Crist, juntament amb vosaltres. Ell ens ha marcat amb el seu segell i, com a penyora, ha posat en els nostres cors el do del seu Esperit.`
				},
				{
					text: `Déu perfeccionarà la bona obra que va començar en mi. `,
					cita: `[Fil 1,6]: Estic segur d’una cosa: el qui ha començat en vosaltres una obra tan excellent, l’anirà duent a terme fins al dia que vingui Jesucrist.`
				},
				{
					text: `Soc ciutadà/na del cel.`,
					cita: `[Fil 3,20]: Nosaltres, en canvi, tenim la nostra ciutadania al cel, i és d’allà que esperem el Salvador, Jesucrist, el Senyor.`
				},
				{
					text: `Estic amagat/da, juntament amb Crist, en Déu. `,
					cita: `[Col 3,3]: Vosaltres vau morir, i la vostra vida està amagada en Déu juntament amb el Crist.`
				},
				{
					text: `No m’ha donat un esperit de temor sinó de poder, d’amor i de domini propi. `,
					cita: `[2Tm 1,7]: Déu no ens ha donat un esperit de covardia, sinó un esperit de fortalesa, d’amor i de seny. Per tant, no t’avergonyeixis de donar testimoni de nostre Senyor.`
				},
				{
					text: `Puc obtenir la gràcia i la misericòrdia en temps de necessitat. `,
					cita: `[He 4,16]: Per tant, acostem-nos confiadament al tron de la gràcia de Déu, perquè es compadeixi de nosaltres i ens concedeixi, quan sigui l’hora, la gràcia i l’ajuda que necessitem.`
				},
				{
					text: `He nascut de Déu i el diable no em pot tocar. `,
					cita: `[1Jn 5,18]: Sabem que tots els qui han nascut de Déu no pequen, perquè els guarda l’Unigènit de Déu, i el Maligne no els pot tocar. `
				},
			],
		},
		"acceptacio": {
			renuncia: "Renuncio a la mentida que diu que soc rebutjat/da, odiat/da o brut/a. EN CRIST SOC COMPLETAMENT ACCEPTAT/DA. Déu em diu que,",
			soc: [
				{
					text: `Soc fill/a de Déu. `,
					cita: `[Juan 1,12]: Però a tots els qui l’han rebut, als qui creuen en el seu nom, els ha concedit de ser fills de Déu.`
				},
				{
					text: `Soc amic/ga de Crist.`,
					cita: `[Juan 15,15]: Ja no us dic servents, perquè el servent no sap què fa el seu amo. A vosaltres us he dit amics perquè us he fet conèixer tot allò que he sentit del meu Pare.`
				},
				{
					text: `He sigut acceptat/da i fet/a santa (justificat/da) per Déu. `,
					cita: `[Rm 5,1]: Ara, doncs, que ja som justos per la fe, estem en pau amb Déu gràcies a nostre Senyor Jesucrist.`
				},
				{
					text: `Estic unit/da a Déu, en un sol esperit amb Ell. `,
					cita: `[1Co 6,17]: En canvi, el qui s’uneix al Senyor es fa un sol esperit amb ell.`
				},
				{
					text: `He sigut comprat/da per preu. Pertanyo a Déu. `,
					cita: `[1Co 6,19-20]: ¿No sabeu que el vostre cos és temple de l’Esperit Sant que heu rebut de Déu i que habita en vosaltres? ¿No sabeu que no sou vostres? Heu estat comprats pagant un preu: glorifiqueu Déu en el vostre cos!`
				},
				{
					text: `Soc membre del cos de Crist. `,
					cita: `[1Co 12,27]: Doncs bé, vosaltres formeu el cos de Crist, i cadascú n’és un membre.`
				},
				{
					text: `Soc un/a dels/de les sants/es de Jesucrist, part de la seva família.`,
					cita: `[Ef 1,1]: Pau, apòstol de Jesucrist per voler de Déu, al poble sant que viu a Efes i que és fidel a Jesucrist.`
				},
				{
					text: `He sigut adoptat/da com a fill/a de Déu. `,
					cita: `[Ef 1,5]: ens destinà a ser fills seus per Jesucrist, segons la seva benèvola decisió`
				},
				{
					text: `Tinc accés directe a Déu per l’Esperit Sant. `,
					cita: `[Ef 2,18]: Per ell, uns i altres, units en un sol Esperit, tenim accés al Pare.`
				},
				{
					text: `He sigut rescatat/da (redimit/da) i perdonat/da de tots els meus pecats. `,
					cita: `[Col 1,14]: Ell ens alliberà del po-der de les tenebres i ens traspassà al Regne del seu Fill estimat, en qui tenim la redempció, el perdó dels nostres pecats.`
				},
				{
					text: `Soc complet/a en Crist. `,
					cita: `[Col 2,10]: Perquè en ell resideix corporalment tota la plenitud de la divinitat, i vosaltres heu arribat a la plenitud gràcies a ell, que és cap de totes les potències i autoritats.`
				},
			],
		}
	})

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