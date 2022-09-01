<template>
  <router-view />
</template>

<script setup>
	import { useAppStore } from 'stores/example-store.js'
	const storeApp = useAppStore()

	import { useQuasar } from 'quasar'
	const $q = useQuasar()


	storeApp.setFavorits( $q.localStorage.getItem('arrFavorits') || [] )  


// import { defineComponent } from 'vue'

// export default defineComponent({
//   name: 'App'
// })
</script>
