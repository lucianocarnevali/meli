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
		<div class="item-location-container">
			<span class="item-location">{{ item.address.state_name }}</span>
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
	padding: 10px;
	// box-shadow: 0 3px 13px 1px rgb(0 0 0 / 9%);
	border-bottom: thin solid #eee;
	.item-picture-container {
		width: 160px;
		height: 160px;
		// margin: 0 auto;
		.item-picture {
			// height: 160px;
			width: 100%;
			max-width: 160px;
			max-height: 160px;
			align-self: center;
			justify-self: center;
			// border-radius: 5px;
			// box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
			max-height: 100%;
			height: auto;
			object-fit: cover;
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
	.item-location-container{	
		padding: 5px;
	}
}
</style>
