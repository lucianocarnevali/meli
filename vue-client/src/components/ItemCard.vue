<template>
  <div class='item-container'>
		<div class="item-picture-container">
			<RouterLink  :to="{ name: 'ItemDetailView', params: { itemId: item.id } }" class="picture-link">
				<img class='item-picture' :src="item.picture" />
			</RouterLink>
		</div>
		<div class="item-info">

			<ItemPrice v-if="item.price" :price="item.price" />

			
			<RouterLink :to="{ name: 'ItemDetailView', params: { itemId: item.id } }" class="title-link">
				<span>{{ item.title }}</span>
			</RouterLink>
			

		</div>
		<div class="item-location">
			<span>{{ item.address.state_name }}</span>

		</div>

  </div>
</template>

<script>
import ItemPrice from '@/components/ItemPrice.vue';

export default {
  name: 'ItemCard',
	components: { ItemPrice },
	props: {
		item: {
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
	display: flex;
	flex-direction: row;
	padding: 20px 50px 20px;
	// box-shadow: 0 3px 13px 1px rgb(0 0 0 / 9%);
	border-bottom: thin solid #eee;
	.item-picture-container {
		width: 160px;
		height: 160px;
		.item-picture {
			object-fit: contain;
			width: 100%;
		}
	}
	.item-info{
		width: 70%;
		background-color: white;
		.title-link{
			text-decoration: none;
			color: inherit;
		}
	}
}
</style>
