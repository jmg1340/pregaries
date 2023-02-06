<template>
	<q-card :class="{'bg-grey-3': !$q.dark.mode, 'bg-blue-grey-10': $q.dark.mode}">
		<q-card-section
			:style="{fontSize: storeApp.tamanyFont +'px'}"
		>
			<div class="q-mb-md">
				<q-select :options="opcionsMisteris" v-model="misteriSeleccionat"
					hint="Seleccionar misteris"
					outlined
					rounded
					options-dark
					options-selected-class="text-yellow"
					menu-shrink
					bg-color="yellow-7"
				/>
			</div>

			<div v-for="(misteri, index) in objRosari.misteris[misteriSeleccionat.value]" :key="index">
				<p>
					<span
          class="text-h6"
          :class="{'text-negative': !$q.dark.mode, 'text-orange': $q.dark.mode}"
          >{{ misteri.titol }}</span> <br />
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

	import { useAppStore } from '../../stores/example-store.js'
  import { useQuasar } from 'quasar'

	const storeApp = useAppStore()
  const $q = useQuasar()

	let misteriSeleccionat = ref({label: "", value: ""})
	const opcionsMisteris = ref([
		{label: "Misteris de GOIG (dilluns i dissabte)", value: "goig"},
		{label: "Misteris de DOLOR (dimarts i divendres)", value: "dolorosos"},
		{label: "Misteris de LLUM (dijous)", value: "llum"},
		{label: "Misteris GLORIOSOS (dimecres i diumenge)", value: "gloriosos"}
	])

	onMounted( () => {

		// segons el dia de la setmana ( moment().day() ), selecciona el misteri que toca

		switch (moment().day()){
			case 0:
			case 3:
				misteriSeleccionat.value = {label: "Misteris GLORIOSOS (dimecres i diumenge)", value: "gloriosos"}
				break;
			case 1:
			case 6:
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

	})

</script>
