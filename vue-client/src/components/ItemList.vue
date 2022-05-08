<template>
  <div class='item-list'>

		<Item v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script>
import Item from '@/components/Item.vue'

export default {
  name: 'ItemList',
	components: { Item },
	props: {
		items: {
			type: Array,
			default: () => []
		},
	}
}
</script>

<style scoped lang="scss">
.item-list {
	width: 1024px;
	margin: 0 auto;
}
</style>
