<template lang="">



		<q-card class="my-card" flat bordered>
		<q-card-section class="text-white" :class="[opcio === 'renuncia' ? 'bg-negative' : '', opcio === 'acceptacio' ? 'bg-green' : '']">
			<q-item-label v-if="opcio === 'renuncia'">RENUNCIO A LA MENTIDA QUE DIU QUE EL MEU PARE DÉU:</q-item-label>
			<q-item-label v-if="opcio === 'acceptacio'">ACCEPTO AMB GOIG LA VERITAT, QUE DIU QUE EL MEU PARE DÉU:</q-item-label>
		</q-card-section>
		<q-separator />
		<q-card-section >
			{{ obj[opcio] }}
		</q-card-section>
	</q-card>
			


</template>

<script setup>
	import { ref } from "vue";

	const props = defineProps({
		obj: {
			type: Object,
		},
		opcio: {
			type: String,
		},
	});


	// const opcioRA = ref("renuncia")

    

</script>



<style lang="">
    
</style>