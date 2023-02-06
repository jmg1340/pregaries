<template>
  <q-card>

		<div class="column items-end">
			<div class="row q-gutter-xs q-pa-xs">
				<div class="col-auto">
					<q-btn @click="replegarDesplegar(true)" dense color="brown-10" icon="keyboard_double_arrow_down" />
				</div>
				<div class="col-auto">
					<q-btn @click="replegarDesplegar(false)" dense color="brown-10" icon="keyboard_double_arrow_up" />
				</div>
			</div>
		</div>


    <q-card-section>

			<q-expansion-item
				v-for="(arr, categoria) in objCategories" :key="categoria"
				v-model="objModel[categoria]"
				class="q-mb-md shadow-3 overflow-hidden"
				style="border-radius: 15px"
				icon="folder"
				dense
				:label="categoria"
				:header-class="{ 'bg-red-10 text-white text-bold': objModel[categoria] && !$q.dark.mode,
                         'text-red-10': !objModel[categoria] && !$q.dark.mode,
                         'bg-grey-10 text-orange text-bold': objModel[categoria] && $q.dark.mode,
                         'bg-grey-9 text-orange-10': !objModel[categoria] && $q.dark.mode,

                         }"

				expand-icon-class="text-red-10"
			>

					<q-list v-for="(obj, index) in arr" :key="index" bordered  dense>
						<q-item
              clickable
              v-ripple
              :to="'/pregaria/' + obj.clau"
              :class="{'bg-brown-1': !$q.dark.mode, 'bg-brown-10': $q.dark.mode}"
            >
                {{obj.titol}}
            </q-item>
					</q-list>



			</q-expansion-item>

			<!-- <div
				v-for="(arr, categoria) in objCategories" :key="categoria" class="q-my-md">
				<div>
					<div class="text-red-10 text-bold ">{{ categoria }}</div>
					<q-list v-for="(obj, index) in arr" :key="index" bordered separator dense>
						<q-item clickable v-ripple class="bg-yellow-1" :to="'/pregaria/' + obj.clau">{{obj.titol}}</q-item>
					</q-list>
				</div>
			</div> -->
    </q-card-section>
  </q-card>
</template>

<script setup>
	import objOracions from "../dades/oracions.json";
	import { ref, toRef, toRefs, isRef, watch, onMounted, computed } from 'vue'
	import { useQuasar } from 'quasar'
	import _ from "lodash";

	const $q = useQuasar()


	/* Objectiu: array de objectes tipus:
			{
				categoria: [
					{clau: <valorClau>, titol: <valorTitol>}
				]
			}
	*/



	const arrClausOracions = computed(() => Object.keys(objOracions))
	const arrCategories = computed(() => {

		/**
		 * 1. Array de les claus del objecte Oracions
		 */
		// const arrClausOracions = Object.keys(objOracions)


		/**
		 * 2. Obtencio array de totes les categories
		 */
		let arrCategories2 = []
		arrClausOracions.value.forEach( (clau) => {

			// generacio de 'arrCategories'
			objOracions[clau].categories.forEach( (c) =>{
				if (! arrCategories2.includes( c )) arrCategories2.push( c )
			})

		})

		return arrCategories2.sort()

	})

	console.log("arrCategories COMPUTED:", arrCategories.value);


	const arrCatClauTitol = computed(() => {

		/**
		 * 1. Array de les claus del objecte Oracions
		 */
		// const arrClausOracions = Object.keys(objOracions)



		const arrCatClauTitol2 = []
		arrClausOracions.value.forEach((clau) => {

			// generacio de 'arrCatClauTitol2'
			arrCatClauTitol2.push({ categories: objOracions[clau].categories, clau: clau, titol: objOracions[clau].titol })
		})


		// console.log("objCategories", objCategories)
		return arrCatClauTitol2

	})

	console.log("arrCatClauTitol COMPUTED:", arrCatClauTitol.value);



	const objCategories = computed(() => {

		let objCategories2 = {}
		arrCategories.value.forEach((cat) => {
			objCategories2[cat] = arrCatClauTitol.value.filter(obj => obj.categories.includes(cat)).map(obj => ({ clau: obj.clau, titol: obj.titol }))
		})

		return objCategories2

	})







	// arrCategories.forEach(key => { 	objModel.value[key] = true })
/*
	const posarPropietatsReactives = () => {
		arrCategories.forEach(key => {
			// objModel.value[key] = true
			toRef( objModel, key )

			if (isRef(objModel.value[key])) {
				console.log("objModelvalue[key] SI REACTIU");
			} else {
				console.log("objModelvalue[key] NO REACTIU")
			}

		});
	}

	posarPropietatsReactives()
*/
	let objModel = ref({})

	const replegarDesplegar = (trueFalse) => {
		for (let cat in objModel.value) {
			// console.log("cat", cat);
			// toRef(objModel.value, key)
			console.log("es reactiu: " + isRef(objModel.value[cat]))
			objModel.value[cat] = trueFalse
		}
		console.log("objModel", objModel.value)
	}



	watch( () => _.cloneDeep(objModel.value), async (newObj, oldObj) => {
		// guarda a localStorage la variable 'Obj'
		console.log("--- WATCH ---")
		$q.localStorage.set("objCategories", JSON.stringify(newObj) )
	})




	onMounted(() => {
		// recupera de localStorage el valor de la variable 'objModel'
		console.log("------- ONMOUNTED ------")
		if ($q.localStorage.getItem('objCategories') !== null ) {
			objModel.value = JSON.parse( $q.localStorage.getItem('objCategories') )
			console.log("objModel ONMOUNTED", objModel)
		} else {
			arrCategories.value.forEach( key => { objModel.value[key] = true })
		}

		arrCategories.value.forEach( key => { toRef(objModel.value, key) })
	})




</script>

<style lang="scss" scoped>

	.borde {
		border: 1px solid grey;
		border-radius: 2px;
	}
</style>
