<template>
  <div class='search-box'>
    <input type='text' 
      id='search'
      v-model="search"
    />
    <RouterLink  :to="{ name: 'ItemListView', query: { q: search, limit: limit }}" class="profile-link">
      <p>Buscar</p>
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  data() {
    return {
      search: '',
      limit: 4
    }
  }
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
