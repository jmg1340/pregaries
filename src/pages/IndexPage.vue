<template>
  <q-page class="flex flex-center">
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    > -->
		<div class="column q-gutter-md items-center q-pa-md">

				<q-btn class="col" @click="anarA('rosari')">
					<div class="text-h4 q-ma-lg">Rosari</div>
				</q-btn>
				<q-btn class="col" @click="anarA('coroneta')">
					<div class="text-h4 q-ma-lg">Coroneta de la divina misericòrdia</div>
				</q-btn>
				<q-btn class="col" @click="anarA('pregaries')">
					<div class="text-h4 q-ma-lg">Pregàries</div>
				</q-btn>

		</div>
  </q-page>
</template>



<script setup>
import { useRouter } from "vue-router";
const router = useRouter();


// import { defineComponent } from 'vue'

// export default defineComponent({
//   name: 'IndexPage'
// })

const anarA = (pagina) => {
	router.push('/' + pagina)
}

</script>
