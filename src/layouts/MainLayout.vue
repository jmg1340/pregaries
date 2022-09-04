<template>
  <q-layout view="lHh Lpr lFf" class="tipusLletraApp">
    <q-header class="bg-brown-11" elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" color="brown-6">
          <q-menu class="" auto-close>
            <q-list>
              <q-item-label
                class="bg-black text-white text-bold text-center"
                header
                dense
              >
                MENU
              </q-item-label>

              <EssentialLink
                v-for="link in essentialLinks"
                :key="link.title"
                v-bind="link"
              />
            </q-list>
          </q-menu>
        </q-btn>

        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="text-brown-6"
          @click="toggleLeftDrawer"
        /> -->

        <q-toolbar-title class="lletraTitolApp text-brown-6">
          Pregàries
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
        <div>
          <q-btn
            v-if="storeApp.bToolBar && storeApp.tipusPregaria == 'individual'"
            label="Tornar"
            class="bg-brown-10"
            @click="tornar"
          />
        </div>
      </q-toolbar>
      <jmgTamanyLletra v-if="storeApp.bToolBar" />
    </q-header>

    <!-- <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list class="">
        <q-item-label header> Opcions </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import jmgTamanyLletra from "./tamanyLletra.vue";
import linksList from "../dades/menu.json";

import { useAppStore } from "../stores/example-store.js";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    jmgTamanyLletra,
  },

  setup() {
    const router = useRouter();
    const storeApp = useAppStore();
    const leftDrawerOpen = ref(false);

    return {
      storeApp,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      tornar() {
        console.log("func TORNAR");
        //leftDrawerOpen.value = !leftDrawerOpen.value;
        router.go(-1);
      },
    };
  },
});
</script>

<style lang="scss" scoped></style>