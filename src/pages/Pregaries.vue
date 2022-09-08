<template>
  <div class="q-pa-md">

    <q-card>
      <q-tabs
        v-model="tab"
        class="lletraTitolApartat bg-brown text-white text-h4"
        align="justify"
        narrow-indicator
        active-bg-color="brown-8"
        active-color="brown-2"
        inline-label
        indicator-color="yellow-9"
      >
        <q-tab name="categories" label="per Categories" noCaps icon="folder" />
        <q-tab name="cercador" label="Cercador" noCaps icon="search" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated class="bg-brown-1">
        <q-tab-panel name="categories">
          <div>
            <jmg-categories />
          </div>
        </q-tab-panel>

        <q-tab-panel name="cercador">
          <jmg-cercador />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>



<script setup>
	import { useQuasar } from "quasar";
	import { ref, watch, onMounted } from "vue";
	import jmgCategories from "../components/categories.vue";
	import jmgCercador from "../components/cercador.vue";
	import { useAppStore } from "../stores/example-store.js";
	const storeApp = useAppStore();

	const tab = ref("categories");
	const $q = useQuasar();

	onMounted(() => {
		storeApp.setToolBar(false);
		tab.value = $q.localStorage.getItem("tabCercadorCategoria") || "categories";
	});

	watch(tab, async (newTab, oldTab) => {
		$q.localStorage.set("tabCercadorCategoria", newTab);
	});
</script>



<style lang="scss" scoped>

</style>