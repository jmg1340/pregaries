<template>
  <div class="q-pa-md">
    <div class="text-h4 text-center q-mb-md titolPagina">
      Corona de la divina misericòrdia
    </div>
    <div class="column q-gutter-md">
      <jmgOracio class="col" clauOracio="pareNostre" />
      <jmgOracio class="col" clauOracio="aveMaria" />
      <jmgOracio class="col" clauOracio="credo" />

      <!-- MISTERIS -->
      <jmgCoronetes />

      <div>Es diu 3 vegades la següent invocació:</div>
      <div :style="{fontSize: storeApp.tamanyFont +'px'}">
        Sant Déu, Sant Fort, Sant Immortal<br>
        tingueu misericòrdia de nosaltres i del món sencer.
      </div>
      <!-- <jmgOracio class="col" clauOracio="prec3" />
      <jmgOracio class="col" clauOracio="prec3" /> -->
    </div>
  </div>
</template>

<script setup>
import jmgOracio from "../../components/oracio.vue";
import jmgCoronetes from "../../components/jmg_Coronetes.vue";
import { onMounted, onUnmounted } from "vue";
import { useAppStore } from "../../stores/example-store.js";
const storeApp = useAppStore();

onMounted(() => {
  storeApp.setToolBar(true);	// component (layout) 'tamanyLletra.vue' visible
});


onUnmounted(() => {
  storeApp.setToolBar(false);	// component (layout) 'tamanyLletra.vue' invisible
});
</script>

<style lang="scss" scoped></style>