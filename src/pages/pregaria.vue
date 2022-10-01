<template>
  <jmgRosari v-if="clauOracio == 'rosari'" />
  <jmgCoronaDivinaMisericordia v-else-if="clauOracio == 'coronaDivinaMisericordia'" />
  <jmgNovenaStJosep v-else-if="clauOracio == 'novenaStJosep'" />
  <jmgNovenaStMiquelArcangel v-else-if="clauOracio == 'novenaStMiquelArcangel'" />
  <jmgNovenaConfiança v-else-if="clauOracio == 'novenaConfiança'" />

  <div v-else class="q-pa-xs text-center">
    <jmgOracio class="col q-mt-md" :clauOracio="clauOracio" />
  </div>
</template>

<script setup>
  import jmgRosari from "./pregariesCompostes/Rosari.vue"
  import jmgCoronaDivinaMisericordia from "./pregariesCompostes/Coroneta.vue"
  import jmgNovenaStJosep from "./pregariesCompostes/novenaStJosep.vue"
  import jmgNovenaStMiquelArcangel from "./pregariesCompostes/novenaStMiquelArcangel.vue"
  import jmgNovenaConfiança from "./pregariesCompostes/novenaConfiança.vue"
  
  import jmgOracio from "../components/oracio.vue";
  import { onMounted, onUnmounted } from "vue";
  import { useAppStore } from "../stores/example-store.js";
  const storeApp = useAppStore();

  const props = defineProps({
    clauOracio: {
      type: String,
    },
  });


  onMounted(() => {
    storeApp.setToolBar(true); // tamanyLletra.vue visible
  });
  onUnmounted(() => {
    storeApp.setToolBar(false); // barraIcones.vue invisible
  });


  /**
  * Estableix la pregariaActiva del Store per despres
  * utilitzar-la per treure o posar favorits
  */
  storeApp.setPregariaActiva(props.clauOracio)


</script>

<style lang="scss" scoped></style>