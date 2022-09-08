<template>
  <div class="q-pa-xs text-center">
    <jmgOracio class="col q-mt-md" :clauOracio="clauOracio" />
  </div>
</template>

<script setup>
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
  storeApp.setTipusPregaria("individual"); 	// icona del cor visible
});
onUnmounted(() => {
  storeApp.setToolBar(false); // tamanyLletra.vue invisible
});
</script>

<style lang="scss" scoped></style>