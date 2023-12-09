<template>
  <q-page class="flex flex-center">
    <img
      alt="Pregàries"
      src="~assets/pregaries.svg"
      style="width: 200px; height: 200px"
    >
    <!-- <div class="column q-gutter-md items-center q-pa-md">
      <q-btn class="col" @click="anarA('pregaries')">
        <div class="text-h4 q-ma-lg">Pregàries</div>
      </q-btn>
      <q-btn class="col" @click="anarA('examen')">
        <div class="text-h4 q-ma-lg">Examen de consciència</div>
      </q-btn>
      <q-btn class="col" @click="anarA('coroneta')">
        <div class="text-h4 q-ma-lg">Corona de la divina misericòrdia</div>
      </q-btn>
    </div> -->
  </q-page>
</template>

<script setup>
import { onMounted } from "vue";
import { useAppStore } from "../stores/example-store.js";
const storeApp = useAppStore();

import { useRouter } from "vue-router";
const router = useRouter();

// import { defineComponent } from 'vue'

// export default defineComponent({
//   name: 'IndexPage'
// })

const anarA = (pagina) => {
  router.push("/" + pagina);
};

onMounted(() => {
  storeApp.setToolBar(false);
  
});

</script>