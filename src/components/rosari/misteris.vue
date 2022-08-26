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
	import { ref } from "vue"
	import objRosari from "../../dades/rosari.json"
	import pareNosteAvemaries from "./jmg_pareNostreAveMaries.vue"

	let misteriSeleccionat = ref({label: "", value: ""})
	const opcionsMisteris = ref([
		{label: "Misteris de GOIG (dilluns i dissabte)", value: "goig"},
		{label: "Misteris de DOLOR (dimarts i divendres)", value: "dolorosos"},
		{label: "Misteris de LLUM (dijous)", value: "llum"},
		{label: "Misteris GLORIOSOS (dimecres i diumenge)", value: "gloriosos"}
	])

</script>