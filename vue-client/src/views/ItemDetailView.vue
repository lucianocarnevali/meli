<template>
  <div class="item">
		<ItemDetail :item="item" :category="category" />
  </div>
</template>

<script>
import ItemDetail from '@/components/ItemDetail.vue';

export default {
  name: 'ItemDetailView',
	components: { ItemDetail },
  data() {
    return {
      item: {},
      category: {}
    }
  },

  created() {
		const itemId = this.$route.params.itemId;
		if (itemId) {
			this.getItem(itemId);
		}
  },

  methods: {
    async getItem(itemId) {
      this.items = [];
      this.category = {};
      try {
        const resItem = await this.$http.items.getItem(itemId);
				const categoryId = resItem.data.item.category_id;
        const resCategory = await this.$http.categories.getCategory(categoryId);
        this.category = resCategory.data.category;
        this.item = resItem.data.item;
      } catch (err) {
				console.error(err);
			}
    },
    handleRouteChange() {
      const queryParams = `?q=${this.$route.query.q}&limit=${this.$route.query.limit}`;
      if (queryParams) {
        this.searchItems(queryParams);
      }
    }
  },
  watch: {
    $route() {      
      this.handleRouteChange();
    }
  }
}
</script>

<style scoped lang="scss">
.item {
	width: 100%;
	max-width: 1024px;
	margin: 0 auto;
}
</style>