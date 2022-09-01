<template>
  <q-layout view="lHh Lpr lFf" class="tipusLletraApp">
    <q-header elevated>
      <q-toolbar class="bg-brown-11">

				<q-btn flat dense round icon="menu" aria-label="Menu">
					<q-menu class="" auto-close>
						<q-list>
							<q-item-label class="bg-black text-white text-bold text-center" header dense> MENU </q-item-label>

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
      </q-toolbar>
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
import linksList from "../dades/menu.json";

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

<style lang="scss" scoped></style>