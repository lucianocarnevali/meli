<template>
  <div class="list">
    <ItemList :items="items" :category="category" />
  </div>
</template>

<script>
import ItemList from '@/components/ItemList.vue'

export default {
  name: 'ItemListView',
  components: { ItemList },
  data() {
    return {
      items: [],
      category: {}
    }
  },

  created() {
    this.handleRouteChange();
  },

  methods: {
    async searchItems(queryParams) {
      this.items = [];
      this.category = {};
      try {
        const resItemList = await this.$http.items.getItems(queryParams);

        const categoryId = resItemList.data.categories.reduce((previous, current, i, arr) =>
          arr.filter(item => item === previous).length >
          arr.filter(item => item === current).length
            ? previous
            : current
        );
        const resCategory = await this.$http.categories.getCategory(categoryId);
        this.category = resCategory.data.category;
        this.items = resItemList.data.items;

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
.list {
  width: 100%;
	max-width: 1024px;
	margin: 0 auto;
}
</style>