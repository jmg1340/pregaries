<template>
  <q-card>
    <q-card-section>
      <div v-if="objOracions[oracio].titol !== ''">
        <div class="text-h6 text-red-10">
          <span class="text-uppercase">{{ objOracions[oracio].titol }}</span>
          {{ textAdicional }}
        </div>
        <q-separator spaced></q-separator>
      </div>
      <div
        v-for="(linia, index) in objOracions[oracio].arrText"
        :key="oracio + '_' + index"
        class="bg-yellow-2"
      >
        {{ linia }}
      </div>
    </q-card-section>
  </q-card>
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

<style></style>