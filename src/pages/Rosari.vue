<template>
  <div class="q-pa-md">
    <div class="text-h4 text-center q-mb-md titolPagina">Rosari</div>
    <div class="column q-gutter-md">
      <jmgOracio class="col" clauOracio="laSenyal" />
      <jmgOracio class="col" clauOracio="prec1" />
      <jmgOracio class="col" clauOracio="gloria" />
      <jmgOracio class="col" clauOracio="credo" />
      <jmgOracio class="col" clauOracio="pareNostre" />
      <jmgOracio
        class="col"
        clauOracio="aveMaria"
        textAdicional="per la Fe..."
      />
      <jmgOracio
        class="col"
        clauOracio="aveMaria"
        textAdicional="per la Esperança..."
      />
      <jmgOracio
        class="col"
        clauOracio="aveMaria"
        textAdicional="per la Caritat..."
      />
      <jmgOracio class="col" clauOracio="gloria" />

      <!-- MISTERIS -->
      <jmgMisteris />

      <jmgOracio class="col" clauOracio="laSalve" />
      <jmgOracio class="col" clauOracio="ohGloriosSanMiquel" />

      <!-- LLETANIES -->
      <jmgLletanies class="col" />

      <jmgOracio class="col" clauOracio="etPreguemEnsConcedeixis" />

      <div class="bg-grey-2 q-pa-lg q-gutter-y-md">
        <div class="text-h5 q-mb-md">Oracions per les intencions del Papa</div>
        <jmgOracio class="col" clauOracio="pareNostre" />
        <jmgOracio class="col" clauOracio="aveMaria" />
        <jmgOracio class="col" clauOracio="gloria" />
      </div>

      <jmgOracio class="col" clauOracio="sotaElVostreMantell" />
      <jmgOracio class="col" clauOracio="laSenyal" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import jmgOracio from "../components/oracio.vue";
import jmgLletanies from "../components/rosari/Lletanies.vue";
import jmgMisteris from "../components/rosari/misteris.vue";

import { useAppStore } from "../stores/example-store.js";
const storeApp = useAppStore();

onMounted(() => {
  storeApp.setToolBar(true);	// component (layout) 'tamanyLletra.vue' visible
  storeApp.setTipusPregaria('composta');	// farà que no es mostri icona del cor a comp 'tamanyLletra.vue
});
onUnmounted(() => {
  storeApp.setToolBar(false); // component (layout) 'tamanyLletra.vue' invisible
});
</script>

<style lang="scss" scoped></style>