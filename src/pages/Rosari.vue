<template>
  <div class="q-pa-md">
    <div class="text-h4 text-center q-mb-md titolPagina">Rosari</div>
    <div class="column q-gutter-md">
      <jmgOracio class="col" oracio="laSenyal" />
      <jmgOracio class="col" oracio="prec1" />
      <jmgOracio class="col" oracio="gloria" />
      <jmgOracio class="col" oracio="credo" />
      <jmgOracio class="col" oracio="pareNostre" />
      <jmgOracio class="col" oracio="aveMaria" textAdicional="per la Fe..." />
      <jmgOracio
        class="col"
        oracio="aveMaria"
        textAdicional="per la Esperança..."
      />
      <jmgOracio
        class="col"
        oracio="aveMaria"
        textAdicional="per la Caritat..."
      />
      <jmgOracio class="col" oracio="gloria" />

      <!-- MISTERIS -->
			<jmgMisteris />

      <jmgOracio class="col" oracio="laSalve" />

      <!-- LLETANIES -->
			<jmgLletanies class="col"/>

      <jmgOracio class="col" oracio="etPreguemEnsConcedeixis" />
      <jmgOracio class="col" oracio="ohGloriosSanMiquel" />
    </div>
  </div>
</template>

<script setup>
import jmgOracio from "../components/oracio.vue";
import jmgLletanies from "../components/rosari/Lletanies.vue";
import jmgMisteris from "../components/rosari/misteris.vue";
</script>

<style lang="scss" scoped></style>