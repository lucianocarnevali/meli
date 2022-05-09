<template>
  <div class='search-box-container'>
    <div class='search-box'>

      <RouterLink :to="{ name: 'HomeView' }" class="logo-link">
        <img src="@/assets/img/meli-logo.png" class="logo" />
      </RouterLink>

      <input type='text' 
        class="search-input"
        id='search'
        v-model="search"
      />

      <RouterLink :to="{ name: 'ItemListView', query: { q: search, limit: limit }}" class="search-link">
        <span class="search-icon">
          <img src="@/assets/icon/search-icon.svg" />
        </span>
      </RouterLink>
    </div>

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
.search-box-container {
	width: 100%;
	background-color: #fff159;
  .search-box {
    display: flex;
    justify-content: center;
    width: 100%;
    background: transparent;
    max-width: 1024px;
    margin: 0 auto;
    padding: 10px 0;
    .logo-link {
      background: transparent;
      .logo {
        padding: 0 5px;
        width: 130px;
        object-fit: cover;
        background: transparent;
      }
    }

    .search-link{
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
      background-color: white;
      height: 30px;
      .search-icon{
        width: 40px;
        height: 30px;
        background-color: white;
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
        border: 0;
        img {
          margin: 8px 5px 0 5px;
          background-color: white;
          width: 16px;
          height: 16px;
        }
      }
    }

    .search-input {
      width: 100%;
      // box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
      height: 30px;
      padding: 7px 60px 9px 15px;
      border-top-left-radius: 2px;
      border-bottom-left-radius: 2px;
      background-color: #fff;
      border: 0;
      border-right: 0.5px solid black;
      font-size: 16px;
      box-sizing: border-box;
      &:focus {
        outline: none;
      }
    }
  }

}
</style>
