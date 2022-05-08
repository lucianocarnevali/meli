<template>
  <div class='search-box'>
    <input type='text' 
      id='search'
      v-model="search"
    />
    <RouterLink  :to="{ name: 'ItemListView', query: { q: search, limit: limit }}" class="profile-link">
      <p>Buscar</p>
    </RouterLink>
    <!-- <button type='submit' @click="handleSearch">Buscar</button> -->
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  props: {
    query: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      search: this.query,
      limit: 4
    }
  },

  // methods: {
  //   async handleSearch() {
  //     console.log('on handleSearch');
  //     try {
	// 			const queryParams = `?q=${this.search}&limit=${this.limit}`;
  //       this.$router.push({ name: 'ItemListView', params: { queryParams } });
  //     } catch (err) {
	// 			console.error(err);
	// 		}
  //   }
  // }
}
</script>

<style scoped lang="scss">
.search-box {
	width: 100%;
	background-color: #fff159;
	display: flex;
	align-items: center;
	justify-content: center;

	input {
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    height: 39px;
		padding: 7px 60px 9px 15px;
    border-radius: 2px;
    background-color: #fff;
    border: 0 rgba(0,0,0,.2);
		color: #333;
    font-size: 16px;
		box-sizing: border-box;
    // width: 100%;
    margin: 0;
    font-family: inherit
	}
}
</style>
