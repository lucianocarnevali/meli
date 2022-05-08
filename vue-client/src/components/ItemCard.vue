<template>
  <div class='item-container'>
		<div class="item-picture-container">
			<RouterLink  :to="{ name: 'ItemView', params: { itemId: item.id } }" class="profile-link">
				<img class='item-picture' :src="item.picture" />
			</RouterLink>
		</div>
		<div class="item-info">
			<span>{{ item.price.currency }} {{ item.price.amount + item.price.decimals }}</span>
			<span>{{ item.title }}</span>
		</div>
		<div class="item-location"></div>

  </div>
</template>

<script>
export default {
  name: 'ItemCard',
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
	background-color: white;
	.item-picture-container {
		width: 160px;
		height: 160px;
		.item-picture {
			object-fit: contain;
			width: 100%;
		}
	}
	.item-info{
		// width: 70%;
		background-color: white;
	}
}
</style>
