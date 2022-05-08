<template>
	<div v-if="category && category.path_from_root" class="breadcrumb-container">
		<span v-for="breadcrumb in category.path_from_root" :key="breadcrumb.id">
			<span class="breadcrumb-name">{{ breadcrumb.name }}</span>
			<span v-if="category.path_from_root.indexOf(breadcrumb) < category.path_from_root.length - 1" class="breadcrumb-separator">></span>
		</span>
	</div>
</template>

<script>
export default {
  name: 'Breadcrumb',
	props: {
		category: {
			type: Object,
			default: () => {}
		}
	}
}
</script>

<style scoped lang="scss">
	.breadcrumb-container {
		padding: 10px;
		.breadcrumb-name{
			padding: 5px;
		}
		.breadcrumb-separator{
			padding: 5px;
		}
	}
</style>