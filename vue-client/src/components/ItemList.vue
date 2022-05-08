<template>
  <div class='item-list'>
		<div v-if="category && category.path_from_root" class="breadcrumb-container">
			<span v-for="breadcrumb in category.path_from_root" :key="breadcrumb.id">
				<span class="breadcrumb-name">{{ breadcrumb.name }}</span>
				<span v-if="category.path_from_root.indexOf(breadcrumb) < category.path_from_root.length - 1" class="breadcrumb-separator">></span>
			</span>
		</div>

		<ItemCard v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script>
import ItemCard from '@/components/ItemCard.vue'

export default {
  name: 'ItemList',
	components: { ItemCard },
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
	width: 1024px;
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
