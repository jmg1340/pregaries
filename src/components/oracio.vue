<template>
  <!-- <q-card>
    <q-card-section> -->
     <div> 
			<div v-if="objOracions[oracio].titol !== ''">
        <div class="text-h6 text-red-10 tipusLletraTitolOracio">
          <span class="text-uppercase">{{ objOracions[oracio].titol }}</span>
          {{ textAdicional }}
        </div>
        <!-- <q-separator spaced></q-separator> -->
      </div>
      <div class="q-pa-md clRequadre">
        <div
          v-for="(linia, index) in objOracions[oracio].arrText"
          :key="oracio + '_' + index"
        >
          {{ linia }}
        </div>
      </div>
		</div>
    <!-- </q-card-section>
  </q-card> -->
</template>

<script setup>
import objOracions from "../dades/oracions.json";
// const props = defineProps(["oracio"]);
const props = defineProps({
  oracio: {
    type: String,
  },
  textAdicional: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.clRequadre {
  border: 1px solid grey;
  border-radius: 10px;
  background-color: $colorbgOracio;
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>