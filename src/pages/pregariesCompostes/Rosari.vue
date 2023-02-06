<template>
  <div class="q-pa-md">
    <div class="text-h4 text-center q-mb-md titolPagina">Rosari</div>
    <div class="column q-gutter-md">
      <jmgOracio class="col" clauOracio="laSenyal" />

      <div :style="{fontSize: storeApp.tamanyFont +'px'}">
        V - Sigueu amb nosaltres, Déu nostre.<br>
        R - Senyor, veniu a ajudar-nos.
      </div>

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

      <div :style="{fontSize: storeApp.tamanyFont +'px'}">
        Et preguem ens concedeixis, Senyor Déu nostre,<br>
        gaudir de contínua salut d'ànima i cos,<br>
        i per la gloriosa intercessió de la benaurada sempre Verge Maria,<br>
        veure'ns lliures de les tristeses de la vida present i gaudir de les alegries eternes.<br>
        Per Crist nostre Senyor. <br>
        Amén.
      </div>

      <div
      class="q-pa-lg q-gutter-y-md"
      :class="{'bg-grey-2': !$q.dark.mode, 'bg-grey-10': $q.dark.mode}"
      >
        <div class="text-h5 q-mb-md">Oracions per les intencions del Papa</div>
        <jmgOracio class="col" clauOracio="pareNostre" />
        <jmgOracio class="col" clauOracio="aveMaria" textAdicional="(3 vegades)"/>
        <jmgOracio class="col" clauOracio="gloria" />
      </div>

      <jmgOracio class="col" clauOracio="sotaElVostreMantell" />
      <jmgOracio class="col" clauOracio="laSenyal" />
    </div>
  </div>
</template>

<script setup>
  import { onMounted, onUnmounted } from "vue";
  import jmgOracio from "../../components/oracio.vue";
  import jmgLletanies from "../../components/rosari/Lletanies.vue";
  import jmgMisteris from "../../components/rosari/misteris.vue";

  import { useAppStore } from "../../stores/example-store.js";
  import { useQuasar } from "quasar";

  const $q = useQuasar();
  const storeApp = useAppStore();

  onMounted(() => {
    storeApp.setToolBar(true);	// component (layout) 'tamanyLletra.vue' visible
  });
  onUnmounted(() => {
    storeApp.setToolBar(false); // component (layout) 'barraIcones.vue' invisible
  });
</script>

<style lang="scss" scoped></style>
