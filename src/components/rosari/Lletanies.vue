<template>
  <div class="q-mt-md">

    <div class="q-my-md text-h6 text-center">LLETANIES</div>


      <q-card class="tipusLletraTextOracio" :style="{fontSize: storeApp.tamanyFont +'px'}">
        <q-card-section
					v-for="(arrObjs, clave) in objRosari.lletanies"
          :key="clave"
				>
          <div
          class="column"
          v-for="(obj, index) in arrObjs" :key="clave + index"
          >

            <div class="row items-center  q-gutter-x-sm">
            <div
            class="col"
            :class="{'text-negative': !$q.dark.mode, 'text-orange': $q.dark.mode}"
            >
              {{ obj.text1 }}
            </div>
            <div class="col  text-grey">
              {{ obj.text2 }}
            </div>

          </div>
          <q-separator spaced="xs"/>

        </div>

        </q-card-section>
      </q-card>


  </div>
</template>


<style scoped>
.borde {
  border: 1px solid red;
}
</style>

<script setup>
	import objRosari from "../../dades/rosari.json";
	import { useAppStore } from '../../stores/example-store.js'
  import { useQuasar } from 'quasar'

  const $q = useQuasar()
	const storeApp = useAppStore()

</script>
