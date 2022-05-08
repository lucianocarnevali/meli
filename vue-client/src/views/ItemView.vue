<template>
  <div class="item">

  </div>
</template>

<script>

export default {
  name: 'ItemView',
  data() {
    return {
      items: [],
      category: {}
    }
  },

  created() {
		const itemId = this.$route.params.itemId;
		if (itemId) {
			console.log('itemId', itemId);
		}
		
  },

  methods: {
    async searchItems(queryParams) {
      this.items = [];
      this.category = {};
      try {
        const resItemList = await this.$http.items.getItems(queryParams);
        console.log(resItemList.data);

        const categoryId = resItemList.data.categories.reduce((previous, current, i, arr) =>
          arr.filter(item => item === previous).length >
          arr.filter(item => item === current).length
            ? previous
            : current
        );
        const resCategory = await this.$http.categories.getCategory(categoryId);
        console.log(resCategory);
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

</style>