<template>
		<div class="row justify-end q-gutter-xs">
			<q-btn class="col-auto" label="+"  color="brown-10" @click="augmentar" />
			<q-btn class="col-auto" label="-"  color="brown-10" @click="disminuir" />
		</div>
</template>


<script setup>
	import { useAppStore } from '../stores/example-store.js'
	const storeApp = useAppStore()

	const augmentar = () => {
		storeApp.increment()
	}
	const disminuir = () => {
		storeApp.decrement()
	}

</script>