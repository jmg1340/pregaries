<template>
  <q-item
    active-class="my-menu-link"
		class="requadre tipusLletraApp"
		ripple
    :to="to" 
		:disable="disabled"
		:clickable="disabled"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" :class="{ 'text-red-7': icon == 'favorite'}"/>
    </q-item-section>

    <q-item-section class="">
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

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
  }
})
</script>

<style lang="scss" scoped>
	.requadre {
		border: 1px solid grey;
		background-color:#e2c1a8;
	}

	.my-menu-link {
  	background-color: #F2C037;
		font-size: 130%;
	}
  
</style>