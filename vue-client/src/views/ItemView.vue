<template>
  <div class="item">
		<Item :item="item" :category="category" />
  </div>
</template>

<script>
import Item from '@/components/Item.vue';

export default {
  name: 'ItemView',
	components: { Item },
  data() {
    return {
      item: {},
      category: {}
    }
  },

  created() {
		const itemId = this.$route.params.itemId;
		if (itemId) {
			console.log('itemId', itemId);
			this.getItem(itemId);
		}
		
  },

  methods: {
    async getItem(itemId) {
      this.items = [];
      this.category = {};
      try {
        const resItem = await this.$http.items.getItem(itemId);
        console.log(resItem.data);
				const categoryId = resItem.data.item.category_id;
        const resCategory = await this.$http.categories.getCategory(categoryId);
        console.log(resCategory);
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