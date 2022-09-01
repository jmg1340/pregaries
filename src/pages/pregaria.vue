<template>
	<jmgTamanyLletra :esOracio="true" class="q-ma-xs" />
  <div class="q-pa-xs text-center">
    <jmgOracio class="col" :clauOracio="clauOracio" />
  </div>
</template>

<script setup>
  import jmgOracio from "../components/oracio.vue";
	import jmgTamanyLletra from "../components/tamanyLletra.vue"
  const props = defineProps({
  clauOracio: {
      type: String,
    },

  });
</script>

<style lang="scss" scoped></style>