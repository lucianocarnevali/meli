<template>
  <div class='item-container'>
		<Breadcrumb :category="category" />

		<div v-if="item" class="item-page">
			<div class="item-left-section">
				<div class="item-picture-container">
					<img class='item-picture' :src="item.picture" />
				</div>
				<div class="item-description">
					<h2>Descripción del Producto</h2>
					<span>{{ item.description }}</span>
				</div>
			</div>
			<div class="item-buy-section">
				<div class="item-condition">
					{{ item.condition === 'new' ? 'Nuevo' : 'Usado' }}
					-
					{{ item.sold_quantity }} Vendidos
				</div>
				<div class="item-title"><h2>{{ item.title }}</h2></div>
				<div v-if="item.price" class="item-price">
				<span class="currency">{{ item.price.currency }}</span>
				<span class="integer">{{ item.price.amount }}</span>
				<span class="decimal">{{ item.price.decimals.toString().padStart(2, '0') }}</span>

				</div>
				<div class="item-buy">
					<button class="button-buy">Comprar</button>
				</div>

			</div>
		</div>

  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue';

export default {
  name: 'ItemDetail',
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
	.item-page {
		width: 100%;
		display: flex;
		.item-left-section {
			width: 70%;
			.item-picture-container {
				padding: 20px;
				.item-picture {
					width: 100%;
					height: 100%;
				}
			}
			.item-description {
				padding: 20px;
				color: #666;
				font-size: 20px;
				font-weight: 400;
				word-break: break-word;
				-webkit-text-size-adjust: 100%;
				-webkit-tap-highlight-color: rgba(0,0,0,.1);
				font-family: Proxima Nova,-apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
				line-height: 1.35;
				h2 {
					font-size: 24px;
					font-weight: 400;
					padding-bottom: 24px;
				}
			}
		}
		.item-buy-section {
			width: 30%;
			display: flex;
			flex-direction: column;
			padding: 20px;
			.item-condition{
				padding: 5px 0;
			}
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
			.item-buy {
				margin-top: 30px;
				width: 100%;
				.button-buy {
					width: 100%;
					-webkit-font-smoothing: antialiased;
					-webkit-border-radius: 6px;
					border-radius: 6px;
					display: inline-block;
					font-family: Proxima Nova,-apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
					font-size: 16px;
					font-weight: 600;
					height: 48px;
					line-height: 48px;
					padding: 0 24px;
					text-align: center;
					cursor: pointer;
					box-sizing: border-box;
					margin: 0 auto;
					background-color: #3483fa;
					border-color: transparent;
					color: #fff;
					&:hover {
						background-color: #2968c8;
						border-color: transparent;
						color: #fff;
						-webkit-transition: background-color .2s ease-in;
						transition: background-color .2s ease-in;
					}
				}
			}
		}
	}
}
</style>
