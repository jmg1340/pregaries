<template>
	<jmgTamanyLletra class="q-ma-xs" />
  <div class="q-pa-xs text-center">
    <jmgOracio class="col" :oracio="oracio" />
  </div>
</template>

<script setup>
  import jmgOracio from "../components/oracio.vue";
	import jmgTamanyLletra from "../components/tamanyLletra.vue"
  const props = defineProps({
  oracio: {
      type: String,
    },

  });
</script>

<style lang="scss" scoped></style>