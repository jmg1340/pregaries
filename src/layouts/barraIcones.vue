<template>
  <q-toolbar class="row justify-between items-center bg-white">
    <!-- BOTO FAVORIT -->
    <div class="col-auto">
      <q-icon
        v-if="
          !storeApp.getClauInFavorits"
        name="favorite_border"
        size="md"
        color="negative"
        @click="afegir"
      />
      <q-icon
        v-if="
          storeApp.getClauInFavorits"
        name="favorite"
        size="md"
        color="negative"
        @click="treure"
      />
    </div>



    <!-- BOTONS TAMANY LLETRA -->
    <div class="col-auto q-gutter-xs">
      <q-btn
        class="col-auto"
        icon="text_increase"
        dense
        color="brown-10"
        @click="augmentar"
      />
      <q-btn
        class="col-auto"
        icon="text_decrease"
        dense
        color="brown-10"
        @click="disminuir"
      />
    </div>
  </q-toolbar>
</template>

<script setup>
  import { useAppStore } from "../stores/example-store.js";
  import { useQuasar } from "quasar";
  const storeApp = useAppStore();

  const $q = useQuasar();



  // TAMANY LLETRA ------------------
  /**
   * Aumenta el tamany de la lletra
   * Guarda el nou tamany al localStorage
   */
  const augmentar = () => {
    storeApp.increment();
    $q.localStorage.set("tamanyLletra", storeApp.tamanyFont);
  };

  /**
   * Disminueix el tamany de la lletra
   * Guarda el nou tamany al localStorage
   */
  const disminuir = () => {
    storeApp.decrement();
    $q.localStorage.set("tamanyLletra", storeApp.tamanyFont);
  };



  // TREURE / AFEGIR A FAVORITS ----------

  /**
   * Afegeix clau de la oració activa al array d'oracions favorites
   * Actualitza el array d'oracions favorites del localStorage
   */
  const afegir = () => {
    storeApp.afegirFavorit(storeApp.pregariaActiva);
    $q.localStorage.set("arrFavorits", JSON.stringify(storeApp.getFavorits()));
  };

  /**
   * Treu clau de la oració activa del array d'oracions favorites
   * Actualitza el array d'oracions favorites del localStorage
   */
  const treure = () => {
    storeApp.treureFavorit(storeApp.pregariaActiva);
    $q.localStorage.set("arrFavorits", JSON.stringify(storeApp.getFavorits()));
  };
  
</script>