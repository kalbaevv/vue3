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
	color: #9cb380;
	background-color: #d4e09b;
	border-radius: 5px;
	padding: 10px;
}
.list {
	padding: 10px;
	font-size: 20px;
	display: flex;
}
</style>
