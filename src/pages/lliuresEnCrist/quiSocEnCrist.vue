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
						<q-item v-for="(strSoc, index) in caracteristiques[tab].soc" :key="index" class="q-my-sm">
							
							<q-item-section avatar>
								<q-icon color="negative" name="label_important" />
							</q-item-section>
								
							<q-item-section>
								<q-item-label 
									caption
									:style="{fontSize: storeApp.tamanyFont +'px'}"
									v-html="strSoc">
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
				`Soc la sal de la terra i la llum del món. [Mt 5,13.14]`,
				`Soc una branca de la vinya veritable, unit/da a Crist, i un conducte de la seva vida. [Jn 15,15]`,
				`M'ha escollit i m'ha designat per donar fruit. [Jn 15,16]`,
				`Soc testimoni personal de Crist, capacitat/da per l'Esperit Sant. [Ac 1,8]`,
				`Soc temple de Déu [1Col 3,16]`,
				`Estic en pau amb Ell i m’ha encarregat treballar per a que altres trobin la pau en Ell`,
				`Soc ministre de  reconciliació. [2Cor 5,17-21]`,
				`Soc col·laborador/a de Déu. [2Cor 6,1]`,
				`Estic assegut/da en llocs celestials amb Jesucrist. [Ef 2,6]`,
				`Soc imatge de Déu, creat/da per fer bones obres. [Ef 2,10]`,
				`Puc apropar-me a Déu amb llibertat i confiança. [Ef 3,12]`,
				`Tot ho puc per mitjà de Crist que m’enforteix. [Fil 4,13]				`
			],
		},
		"seguretat": {
			renuncia: "Renuncio a la mentida que diu que soc culpable, que estic desprotegit/da, sol/a o abandonat/da. EN CRIST TINC PLENA SEGURETAT. Déu em diu que,",
			soc: [
				`Soc lliure de condemna (càstig). [Rm 8,1-2]`,
				`Tinc la seguretat que totes les coses cooperen per al meu bé (per al bé dels que estimen Déu). [Rm 8,28]`,
				`Soc lliure de qualsevol acusació contra mi. [Rm 8,31-34]`,
				`Res no em pot separar de l’Amor de Déu. [Rm 8,35-39]`,
				`Déu m’ha afirmat, ungit i segellat. [2Co 1,21-22]`,
				`Déu perfeccionarà la bona obra que va començar en mi. [Fil 1,6]`,
				`Soc ciutadà/na del cel. [Fil 3,20]`,
				`Estic amagat/da, juntament amb Crist, en Déu. [Col 3,3]`,
				`No m’ha donat un esperit de temor sinó de poder, d’amor i de domini propi. [2Tm 1,7]`,
				`Puc obtenir la gràcia i la misericòrdia en temps de necessitat. [He 4,16]`,
				`He nascut de Déu i el diable no em pot tocar. [1Jn 5,18]`,
			],
		},
		"acceptacio": {
			renuncia: "Renuncio a la mentida que diu que soc rebutjat/da, odiat/da o brut/a. EN CRIST SOC COMPLETAMENT ACCEPTAT/DA. Déu em diu que,",
			soc: [
				`Soc fill/a de Déu. [Juan 1,12]`,
				`Soc amic/ga de Crist. [Juan 15,15]`,
				`He sigut acceptat/da i fet/a santa (justificat/da) per Déu. [Rm 5,1]`,
				`Estic unit/da a Déu, en un sol esperit amb Ell. [1Co 6,17]`,
				`He sigut comprat/da per preu. Pertanyo a Déu. [1Co 6,19-20]`,
				`Soc membre del cos de Crist. [1Co 12,27]`,
				`Soc un/a dels/de les sants/es de Jesucrist, part de la seva família. [Ef 1,1]`,
				`He sigut adoptat/da com a fill/a de Déu. [Ef 1,5]`,
				`Tinc accés directe a Déu per l’Esperit Sant. [Ef 2,18]`,
				`He sigut rescatat/da (redimit/da) i perdonat/da de tots els meus pecats. [Col 1,14]`,
				`Soc complet/a en Crist. [Col 2,10]`,
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