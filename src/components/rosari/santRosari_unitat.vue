<template>
  <!-- <q-card
    :class="{
      'text-negative': !$q.dark.isActive,
      'text-orange': $q.dark.isActive,
      styActivat: activat,
    }"
    class="flex flex-center dimensions shadow-6 bordered"
    @click="activat = !activat"
  > -->
  <q-card
    v-if="!activat"
    :class="{'text-negative': !$q.dark.mode, 'text-orange': $q.dark.mode}"
    class="flex flex-center dimensions shadow-6 bordered"
    @click="activat = !activat"
  >
    {{ numero }}
  </q-card>
  <q-img
    v-if="activat"
    src="~assets/Red_rose_02.png"
    height="60px"
    width="60px"
    @click="activat = !activat"
  ></q-img>
</template>

<script setup>
	import { ref } from "vue";
  import { useQuasar } from 'quasar'

  const $q = useQuasar()

	const props = defineProps(["numero"]);
	let activat = ref(false);
	const reset = () => (activat.value = false);
</script>

<style lang="scss" scoped>
.dimensions {
  // color: darkred;
  width: 60px;
  height: 60px;
  /* background-image: url("~assets/Red_rose_02.png"); */
}

// .styActivat {
//   background-color: #bdc4ff;
//   font-weight: bold;
//   font-size: 130%;
//   color: rgb(4, 17, 92) !important;
//   border: 1px solid rgb(117, 117, 117);
// }
// .styActivat_imatge {
//   background-image: url("~assets/Red_rose_02.png") !important;
//   border: 1px solid rgb(117, 117, 117);
// }
</style>
