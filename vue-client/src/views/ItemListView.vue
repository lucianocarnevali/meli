<template>
  <div class="list">
    <SearchBox :query="$route.query.q ? $route.query.q : ''" />

    <ItemList :items="items" />

  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue'
import ItemList from '@/components/ItemList.vue'

export default {
  name: 'ItemListView',
  components: {
    SearchBox, ItemList
  },
  data() {
    return {
      items: []
    }
  },

  created() {
    this.handleRouteChange();
  },

  methods: {
    async searchItems(queryParams) {
      this.items = [];
      try {
        const res = await this.$http.items.getItems(queryParams);
        console.log(res.data);
        this.items = res.data.items;
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