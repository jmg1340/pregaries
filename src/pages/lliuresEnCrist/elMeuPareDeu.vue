<template>
	<div class="q-pa-md">
			<div class="text-center">
				<div class="text-h5">EL MEU PARE DEU</div>
				<div class="caption text-grey">font: <span class="text-italic">www.libertadencristo.org</span></div>
			</div>

			<!-- <q-list> -->
				<q-item v-for="(obj, index) in reunciesAcceptacions" :key="index">
					<q-carousel
					v-model="obj.opcio"
					transition-prev="slide-right"
					transition-next="slide-left"
					swipeable
					animated
					arrows
					controlType="push"
					control-color="brown-4"
					class="rounded-borders"
					:height="obj.alturaCarrusel"
					>
						<q-carousel-slide name="renuncia" class="column no-wrap flex-center">
							<div class="q-mt-md text-center">
								<jmgRenunciaAcceptacio :obj="obj" :opcio="obj.opcio"/>
							</div>
						</q-carousel-slide>
						<q-carousel-slide name="acceptacio" class="column no-wrap flex-center">
							<div class="q-mt-md text-center">
								<jmgRenunciaAcceptacio :obj="obj" :opcio="obj.opcio"/>
							</div>
						</q-carousel-slide>
					</q-carousel>
				</q-item>
				<q-separator/>

			<!-- </q-list> -->
	</div>
</template>


<script setup>
	import { ref } from "vue";
	import jmgRenunciaAcceptacio from "../../components/elMeuPareDeu/renunciaAcceptacio.vue";


	const reunciesAcceptacions = ref([
		{
			alturaCarrusel: "145px",
			opcio: "renuncia",
			renuncia: "És distant i indiferent cap a mi",
			acceptacio: "S’involucra íntimament en la meva vida. (Sl 139,1-18)"
		},
		{
			alturaCarrusel: "150px",
			opcio: "renuncia",
			renuncia: "És insensible i que no es preocupa per mi",
			acceptacio: "És amable i compassiu. (Sl 103,8-14)"
		},
		{
			alturaCarrusel: "145px",
			opcio: "renuncia",
			renuncia: "És sever i exigent",
			acceptacio: "M’accepta com soc i es delecta en mi.(Rm 15,7; So 3,17)"
		},
		{
			alturaCarrusel: "150px",
			opcio: "renuncia",
			renuncia: "És fred i passiu",
			acceptacio: "És carinyós i afectuós. (Is 40,11; Os 11,3,4)"
		},
		{
			alturaCarrusel: "250px",
			opcio: "renuncia",
			renuncia: "És absent i està massa ocupat per estar amb mi",
			acceptacio: "Sempre està amb mi i s’interessa per mi. (He 13,5; Jr 31,20; Ezequiel 34,11-16)"
		},
		{
			alturaCarrusel: "250px",
			opcio: "renuncia",
			renuncia: "És impacient, sempre està enfadat i mai està satisfet amb el que faig",
			acceptacio: "És pacient i lent per a la ira. Es delecta amb els que esperen el seu Amor constant. (Ex 34,6; 2Pe 3,9; Sl 147,11)"
		},
		{
			alturaCarrusel: "250px",
			opcio: "renuncia",
			renuncia: "És cruel i abusiu",
			acceptacio: "És carinyós, amable i protector. (Jr 31,3; Is 42,3; Sl 18,2)"
		},
		{
			alturaCarrusel: "250px",
			opcio: "renuncia",
			renuncia: "No permet que gaudeixi de la vida",
			acceptacio: "És digne de confiança y vol donar-me una vida plena. La seva voluntat és bona, perfecta i acceptable per mi. (Lm 3,22, 23; Jn 10,10; Rm 12,1-2)"
		},
		{
			alturaCarrusel: "250px",
			opcio: "renuncia",
			renuncia: "Em vol controlar o manipular",
			acceptacio: "Està ple de gràcia i de misericòrdia. Em dona llibertat fins i tot per fallar-li. (Heb 4,15, 15; Lc 15,11-16)"
		},
		{
			alturaCarrusel: "250px",
			opcio: "renuncia",
			renuncia: "Em condemna i no em vol perdonar",
			acceptacio: "És compassiu i sempre perdona. El seu cor i els seus braços sempre estan oberts per a mi. (Sl 130,1-4; Lc 15,17-24)"
		},
		{
			alturaCarrusel: "250px",
			opcio: "renuncia",
			renuncia: "Busca els meus errors o exigeix la perfecció en tots els detalls",
			acceptacio: "Es preocupa pel meu desenvolupament. Està orgullós de mi. Em tracta com un fill en creixement. (Rm 8,28; He 12,5-11; 2Co 5,17)"
		},
	])



</script>


<style lang="css">

</style>