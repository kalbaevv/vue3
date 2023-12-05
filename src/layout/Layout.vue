<script setup>
import Header from "../components/header/Header.vue";
</script>

<template>
	<div class="container">
		<Header />
		<router-view> </router-view>
	</div>
</template>
<style>
.container {
	max-width: 1400px;
	margin: 0 auto;
}
</style>
