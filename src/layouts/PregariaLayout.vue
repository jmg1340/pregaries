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
				<div>
					<q-btn label="Tornar" class="bg-brown-10" @click="tornar" />
				</div>
      </q-toolbar>
    </q-header>




    <!-- <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> OpcionsSS </q-item-label>

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
import { useRouter } from "vue-router";


export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
		const router = useRouter()    
		const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
			tornar() {
				console.log("func TORNAR")
				//leftDrawerOpen.value = !leftDrawerOpen.value;
				router.go(-1)
			}
    };
  },
});
</script>

<style lang="scss" scoped></style>