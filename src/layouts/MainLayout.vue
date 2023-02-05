<template>
  <q-layout view="lHh Lpr lFf" class="tipusLletraApp">
    <q-header elevated :class="{'bg-brown-11': !$q.dark.mode, 'bg-brown-10': $q.dark.mode}">
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

              <q-item>
                  <q-toggle v-model="darkMode" color="orange" keep-color label="Tema fosc" @update:model-value="toggleDarkMode"/>
              </q-item>

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
            v-if="storeApp.bToolBar"
            label="Tornar"
            class="bg-brown-10"
            @click="tornar"
          />
        </div>
      </q-toolbar>
      <jmgBarraIcones v-if="storeApp.bToolBar" />
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
import { defineComponent, ref, onMounted } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import jmgBarraIcones from "./barraIcones.vue";
import linksList from "../dades/menu.json";

import { useAppStore } from "../stores/example-store.js";
import { useRouter } from "vue-router";
import { useQuasar } from 'quasar'

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    jmgBarraIcones,
  },

  setup() {
    const router = useRouter();
    const storeApp = useAppStore();
    const $q = useQuasar()

    const leftDrawerOpen = ref(false);
    const darkMode = ref(false)


    onMounted(() => {
      try {
        console.log('$q.localStorage.getItem("keyDarkMode")', $q.localStorage.getItem("keyDarkMode"));
        darkMode.value = JSON.parse($q.localStorage.getItem("keyDarkMode")) || false
        console.log("darkMode", darkMode.value)
        $q.dark.set(darkMode.value)

      } catch (error) {
        console.log("Error possiblement produit per 'keyDarkMode' NO DEFINIDA")
        console.log(error)
      }

    })








    return {
      storeApp,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      darkMode,
      toggleDarkMode () {
        $q.dark.set(darkMode.value)

        try {
          $q.localStorage.set("keyDarkMode", JSON.stringify(darkMode.value))
        } catch (e) {
          console.log("ERROR AL GUARDAR localhost")
          console.log(e)
        }


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
