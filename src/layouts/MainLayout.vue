<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-brown-11">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
					class="text-brown-6"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="lletraTitolApp text-brown-6"> Pregàries </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Rosari",
    caption: "El sant Rosari",
    icon: "school",
    to: "/rosari",
  },
  {
    title: "Pregàries",
    caption: "Pregàries classificades",
    icon: "code",
    to: "/pregaries",
  },
  {
    title: "Novenes",
    caption: "Novenes varies",
    icon: "chat",
    to: "/novenes",
  },
  {
    title: "Favorits",
    caption: "Pregàries favorites",
    icon: "record_voice_over",
    to: "/favorits",
  },
  // {
  //   title: 'Twitter',
  //   caption: '@quasarframework',
  //   icon: 'rss_feed',
  //   link: 'https://twitter.quasar.dev'
  // },
  // {
  //   title: 'Facebook',
  //   caption: '@QuasarFramework',
  //   icon: 'public',
  //   link: 'https://facebook.quasar.dev'
  // },
  // {
  //   title: 'Quasar Awesome',
  //   caption: 'Community Quasar projects',
  //   icon: 'favorite',
  //   link: 'https://awesome.quasar.dev'
  // }
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="scss" scoped>

</style>