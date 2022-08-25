<template>
	<q-card :class="{'text-negative': !$q.dark.isActive, 'text-orange': $q.dark.isActive, styActivat: activat}" class="flex flex-center dimensions shadow-6 bordered " @click="activat = !activat">
		{{ numero }}
	</q-card>
</template>



<script setup>
	import { ref } from "vue"

	const props = defineProps(['numero'])
	let activat = ref(false)
	const reset = () => activat.value = false

</script>



<style lang="css" scoped>

	.dimensions {
		color: darkred;
		width: 60px;
		height: 60px;
	}

	.styActivat {
		background-color: rgb(128, 255, 0);
		font-weight: bold;
		color: darkblue !important;
		border: 1px solid rgb(117, 117, 117);
	}

</style>
