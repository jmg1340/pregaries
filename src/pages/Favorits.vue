<template>
  <div class="q-pa-md">
    <div class="text-h4 text-center q-mb-md titolPagina">Favorits</div>

		<!-- <pre>{{ objOracions }}</pre> -->

		<!-- TAULA AMB RESULTATS -->
		<q-markup-table dense bordered class=" q-mx-sm" separator="cell" wrap-cells>
			<thead class="bg-grey-8 text-white">
				<tr>
					<th class="text-center lletraTaula">Pregàries preferides</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="(clau, index) in arrF"
					:key="`oracio2-${index}`"
					@click="MostrarOracio(clau)"
				>
					<td class="lletraTaula">
						{{ objOracions[clau].titol }}
					</td>
				</tr>
			</tbody>
		</q-markup-table>		

  </div>
</template>




<script setup>
	import objOracions from "../dades/oracions.json";
	import { useAppStore } from '../stores/example-store.js'
	const storeApp = useAppStore()
	import { useRouter } from "vue-router";
	const router = useRouter();

	const arrF = storeApp.getFavorits()

	/**
	 * Mostra la oració al fer click sobre ella
	 */
	const MostrarOracio = (clauOracio) => {
		router.push("/pregaria/" + clauOracio);
	};

</script>







<style lang="scss" scoped>
	.lletraTaula { 
		font-size: 18px;
	}
</style>