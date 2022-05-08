<template>
  <div class='item-list'>
		<Breadcrumb :category="category" />

		<ItemCard v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue';
import ItemCard from '@/components/ItemCard.vue';

export default {
  name: 'ItemList',
	components: { Breadcrumb, ItemCard },
	props: {
		items: {
			type: Array,
			default: () => []
		},
		category: {
			type: Object,
			default: () => {}
		}
	}
}
</script>

<style scoped lang="scss">
.item-list {
	width: 100%;
	max-width: 1024px;
	margin: 0 auto;
	.breadcrumb-container {
		padding: 10px;
		.breadcrumb-name{
			padding: 5px;
		}
		.breadcrumb-separator{
			padding: 5px;
		}
	}
}
</style>
