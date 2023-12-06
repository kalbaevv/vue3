<script setup>
import ProductsList from "../ProductsList/ProductsList.vue";

const props = defineProps(["categories"]);
</script>
<template>
	<div class="heading">
		{{ categories.name }}
	</div>
	<h1 class="list">
		<div v-for="products in categories.products">
			<ProductsList :products="products" />
		</div>
	</h1>
</template>

<style scoped>
.heading {
	margin-top: 20px;
	font-size: 30px;
	color: #fff;
	border-bottom: 3px solid #90baad;
	padding: 10px;
}
.list {
	padding: 10px;
	font-size: 20px;
	display: flex;
	margin-left: 30px;
}
</style>
