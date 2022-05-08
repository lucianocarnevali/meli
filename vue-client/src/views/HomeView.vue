<template>
	<div class="home">
    <SearchBox />

		<transition name="page" mode="out-in" :duration="250">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue'

export default {
  name: 'HomeView',
  components: {
    SearchBox
  }
}
</script>

<style scoped lang="scss">
.home {
  width: 100%;
	background-color: #ebebeb;
}
</style>