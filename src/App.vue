<template>
  <router-view />
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


</script>
