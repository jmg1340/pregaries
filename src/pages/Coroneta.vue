<template>
  <div class="q-pa-md">
    <div class="text-h4 text-center q-mb-md titolPagina">Coroneta de la divina misericòrdia</div>
    <div class="column q-gutter-md">

      <jmgOracio class="col" oracio="pareNostre" />
      <jmgOracio class="col" oracio="aveMaria" />
      <jmgOracio class="col" oracio="credo" />

      <!-- MISTERIS -->
      <jmgCoronetes />

      <jmgOracio class="col" oracio="prec3" />
      <jmgOracio class="col" oracio="prec3" />
      <jmgOracio class="col" oracio="prec3" />
    </div>
  </div>
</template>

<script setup>
import jmgOracio from "../components/oracio.vue";
import jmgLletanies from "../components/rosari/Lletanies.vue";
import jmgCoronetes from "../components/jmg_Coronetes.vue";
</script>

<style lang="scss" scoped></style>