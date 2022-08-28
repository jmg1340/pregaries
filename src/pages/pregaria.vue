<template>
  <div class="q-pa-xl text-center">
    <jmgOracio class="col" :oracio="oracio" />
  </div>
</template>

<script setup>
  import jmgOracio from "../components/oracio.vue";
  const props = defineProps({
  oracio: {
      type: String,
    },

  });
</script>

<style lang="scss" scoped></style>