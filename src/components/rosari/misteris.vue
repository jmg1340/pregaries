<template>
	<q-card class="bg-grey-3">
		<q-card-section>
			<div class="q-mb-md">
				<q-select :options="opcionsMisteris" v-model="misteriSeleccionat" label="Seleccionar misteris"></q-select>
			</div>

			<div v-for="(misteri, index) in objRosari.misteris[misteriSeleccionat.value]" :key="index">
				<p>
					<span class="text-red-10 text-h6">{{ misteri.titol }}</span> <br />
					{{ misteri.text}}
				</p>

				<p>
					<pareNosteAvemaries />
				</p>

			</div>
		</q-card-section>
	</q-card>
	


</template>
<script setup>
	import { ref, onMounted } from "vue"
	import objRosari from "../../dades/rosari.json"
	import pareNosteAvemaries from "./jmg_pareNostreAveMaries.vue"
	import moment from 'moment'

	let misteriSeleccionat = ref({label: "", value: ""})
	const opcionsMisteris = ref([
		{label: "Misteris de GOIG (dilluns i dissabte)", value: "goig"},
		{label: "Misteris de DOLOR (dimarts i divendres)", value: "dolorosos"},
		{label: "Misteris de LLUM (dijous)", value: "llum"},
		{label: "Misteris GLORIOSOS (dimecres i diumenge)", value: "gloriosos"}
	])

	onMounted( () => {
		console.log("dia setmana: ", moment().day())
		switch (moment().day()){
			case 0:
			case 3:
				misteriSeleccionat.value = {label: "Misteris GLORIOSOS (dimecres i diumenge)", value: "gloriosos"}
				break;
			case 1:
			case 6:
				console.log("hola")
				misteriSeleccionat.value = {label: "Misteris de GOIG (dilluns i dissabte)", value: "goig"}
				break;
			case 2:
			case 5:
				misteriSeleccionat.value = {label: "Misteris de DOLOR (dimarts i divendres)", value: "dolorosos"}
				break;
			case 4:
				misteriSeleccionat.value = {label: "Misteris de LLUM (dijous)", value: "llum"}
				break;
		}

		console.log("misteri seleccionat: ", misteriSeleccionat.value)
	})

</script>