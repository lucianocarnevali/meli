<template>
  <div class='item-container'>
		<Breadcrumb :category="category" />

		<div class="item-picture">
			<img class='imagen-testimonio' :src="item.picture" />

		</div>


  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue';

export default {
  name: 'Item',
	components: { Breadcrumb },
	props: {
		item: {
			type: Object,
			default: () => {}
		},
		category: {
			type: Object,
			default: () => {}
		}
	},

  methods: {

  }
}
</script>

<style scoped lang="scss">
.item-container {

}
</style>
