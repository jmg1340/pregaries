<template>
  <q-card>
    <q-card-section>
			<div v-for="(arr, categoria) in objCategories" :key="categoria" class="q-my-md">
				<div>
					<div class="text-red">{{ categoria }}</div>
					<q-list v-for="(obj, index) in arr" :key="index" bordered separator dense>
						<q-item clickable v-ripple class="" :to="'/pregaria/' + obj.clau">{{obj.titol}}</q-item>
					</q-list>
				</div>
			</div>
    </q-card-section>
  </q-card>
</template>

<script setup>
	import objOracions from "../dades/oracions.json";
	// const props = defineProps(["oracio"]);


	/* Array de objectes tipus:
			{
				categoria: [
					{clau: <valorClau>, titol: <valorTitol>}
				]
			}
	*/

	const arrClausOracions = Object.keys(objOracions)
	let objCategories = {}

	const arrCatClauTitol = []
	arrClausOracions.forEach( (clau) => {
		arrCatClauTitol.push(  {categoria: objOracions[clau].categoria, clau: clau, titol: objOracions[clau].titol} )
	})

	const arrCategories_Duplicats = arrClausOracions.map( (clau) => objOracions[clau].categoria ).sort()
	const arrCategories_Unics = arrCategories_Duplicats.filter( (clau, index) =>  arrCategories_Duplicats.indexOf(clau) === index)

	arrCategories_Unics.forEach( (cat) => {
		objCategories[cat] = arrCatClauTitol.filter ( obj => obj.categoria === cat && obj.titol !== '' ).map (obj => ({clau: obj.clau, titol: obj.titol}))
	})
	

	console.log("objCategories", objCategories)



</script>

<style lang="scss" scoped>

	.borde { 
		border: 1px solid grey;
		border-radius: 10px;
	}
</style>