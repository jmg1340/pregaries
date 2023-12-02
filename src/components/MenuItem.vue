<template>
  <q-item
    active-class="my-menu-link"
		class="tipusLletraApp"
    :class="{'text-black': !$q.dark.mode, 'text-orange bg-grey-10': $q.dark.mode}"
		ripple
    :to="to"
		:disable="disabled"
		:clickable="disabled"
  >
    
    <!-- icona item -->
    <q-item-section
      v-if="icon  &&  to !== 'false'"
      avatar
    >
      <q-icon :name="icon" :class="{ 'text-red-7': icon == 'favorite'}"/>
    </q-item-section>

    <!-- Text del item -->
    <q-item-section class="">
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>

    <!-- icona fletxeta dreta indicant submenu -->
    <q-item-section side
    v-if="to === 'false'"
    >
      <q-icon name="keyboard_arrow_right" />
    </q-item-section>





    
    <!-- submenu -cas de que n'hi hagi -->
    <q-menu anchor="top end" self="top start">
      <q-list>
        <q-item
          v-for="(itemSubmenu1, idx) in subMenu1"
          :key="idx"
          dense
          clickable
          v-bind="itemSubmenu1"
        >

          <!-- icona item -->
          <q-item-section
            v-if="icon  &&  to !== 'false'"
            avatar
          >
            <q-icon :name="icon"/>
          </q-item-section>

          <!-- Text del item -->
          <q-item-section class="">
            <q-item-label>{{ title }}</q-item-label>
            <q-item-label caption>{{ caption }}</q-item-label>
          </q-item-section>


        </q-item>
      </q-list>
    </q-menu>



  </q-item>
</template>

<script>
import { defineComponent } from 'vue'
import { useQuasar } from "quasar";

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    to: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    },

		disabled: {
      type: Boolean,
			default: false
		}
  },

  setup(){
    const $q = useQuasar();

  }
})
</script>

<style lang="scss" scoped>
	.requadre {
		border: 1px solid grey;
	}

	.my-menu-link {
  	background-color: $yellow-11;
		font-size: 130%;
	}

</style>
