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


	/* Objectiu: array de objectes tipus:
			{
				categoria: [
					{clau: <valorClau>, titol: <valorTitol>}
				]
			}
	*/

	let objCategories = {}
	
	/**
	 * 1. Array de les claus del objecte Oracions
	 */
	const arrClausOracions = Object.keys(objOracions)


	/**
	 * 2. Obtencio array de totes les categories
	 */
	const arrCatClauTitol = []
	let arrCategories = []
	arrClausOracions.forEach( (clau) => {

		// generacio de 'arrCategories'
		objOracions[clau].categories.forEach( (c) =>{
			if (! arrCategories.includes( c )) arrCategories.push( c )
		})
		arrCategories.sort()
		
		// generacio de 'arrCatClauTitol'
		arrCatClauTitol.push(  {categories: objOracions[clau].categories, clau: clau, titol: objOracions[clau].titol} )
	})

	
	arrCategories.forEach( (cat) => {
		objCategories[cat] = arrCatClauTitol.filter ( obj => obj.categories.includes(cat) && obj.titol !== '' ).map (obj => ({clau: obj.clau, titol: obj.titol}))
	})
	

	// console.log("objCategories", objCategories)



</script>

<style lang="scss" scoped>

	.borde { 
		border: 1px solid grey;
		border-radius: 10px;
	}
</style>