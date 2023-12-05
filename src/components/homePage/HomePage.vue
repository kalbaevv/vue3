<script setup>
import { ref } from "vue";

import CategoriesList from "../categoriesList/CategoriesList.vue";
import dataDetails from "../../data/data.json";
import dataNames from "../../data/names.json";
import { useItemStore } from "../../stores/itemStore";

const itemStore = useItemStore();

const categoriesAndProducts = ref(itemStore.mapData(dataDetails, dataNames));
</script>

<template>
	<div v-for="categories in categoriesAndProducts">
		<CategoriesList :categories="categories" />
	</div>
</template>

<style scoped>
.homePage {
	overflow: scroll;
}
</style>
