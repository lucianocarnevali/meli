<template>
	<div class="pageView">
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