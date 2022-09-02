<template>
	<q-toolbar class="row justify-between items-center bg-white">
		<div class="col-auto">
			<q-icon v-if="!storeApp.getClauInFavorits && props.esOracio" name="favorite_border" size="md" color="negative" @click="afegir"/>
			<q-icon v-if="storeApp.getClauInFavorits && props.esOracio" name="favorite" size="md" color="negative" @click="treure"/>
		</div>
		<div class="col-auto q-gutter-xs">
			<q-btn class="col-auto" icon="text_increase" dense color="brown-10" @click="augmentar" />
			<q-btn class="col-auto" icon="text_decrease" dense color="brown-10" @click="disminuir" />
		</div>
	</q-toolbar>
</template>


<script setup>

	import { useAppStore } from '../stores/example-store.js'
	const storeApp = useAppStore()

	import { useQuasar } from 'quasar'
	const $q = useQuasar()


	const props = defineProps({
		// esOracio: si la resta de la pagina es tracta d'una oracio -individual- o no  (Rosari / Coroneta)
		// Si es oracio ha d'apareixer l'icona de favorit. Sino no.
		esOracio: {
			type: Boolean,
			default: () => false,
		},
	});





	// TAMANY LLETRA ------------------
	const augmentar = () => {
		storeApp.increment()
	}
	const disminuir = () => {
		storeApp.decrement()
	}

	// TREURE / AFEGIR A FAVORITS ----------
	const afegir = () => {
		storeApp.afegirFavorit( storeApp.pregariaActiva )
		$q.localStorage.set("arrFavorits", JSON.stringify( storeApp.getFavorits() ))
	}
	const treure = () => {
		storeApp.treureFavorit( storeApp.pregariaActiva )
		$q.localStorage.set("arrFavorits", JSON.stringify( storeApp.getFavorits() ))

	}


</script>