<template>
	<div class="row justify-center">
		<router-view class="col-xs-12 col-sm-8 col-md-6 col-lg-10"/>
	</div>

</template>

<script setup>
	import { useAppStore } from 'stores/example-store.js'
	import { useQuasar } from 'quasar'

	const storeApp = useAppStore()
	const $q = useQuasar()

	/**
	 * Recupera array favorits del localStorage
	 */
	storeApp.setFavorits( $q.localStorage.getItem('arrFavorits') || "[]")

	/**
	 * Recupera tamany lletra del localStorage
	 */
   storeApp.setTamanyFont( $q.localStorage.getItem('tamanyLletra') || 15 )

	/**
	 * Recupera array Examen del localStorage
	 */
   storeApp.setArrExamen( $q.localStorage.getItem('arrExamen') || "[]" )




</script>



<style lang="css">


</style>
