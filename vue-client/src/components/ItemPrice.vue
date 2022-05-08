<template>
	<div v-if="price" class="item-price">
		<span class="currency">{{ price.currency }}</span>
		<span class="integer">{{ price.amount }}</span>
		<span class="decimal">{{ price.decimals.toString().padStart(2, '0') }}</span>
	</div>
</template>

<script>
export default {
  name: 'ItemPrice',
	props: {
		price: {
			type: Object,
			default: () => {}
		}
	}
}
</script>

<style scoped lang="scss">
.item-price{
	display: flex;
	font-size: 28px;
	align-items: flex-start;
	padding: 10px 0;
	// font-weight: bold;
	.currency{
		padding-right: 5px;
	}
	.integer{
		padding-right: 5px;
	}
	.decimal{
		margin-top: 2px;
		font-size: 15px;

	}
}
</style>