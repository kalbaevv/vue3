<script setup>
import { ref } from "vue";

import logo from "../../assets/logo.svg";
import homeIcon from "../../assets/home.svg";
import cartPageicon from "../../assets/cartPage.svg";
</script>

<template>
	<div class="nav" :class="{ sticking }">
		<div>
			<img class="logo" :src="logo" alt="" />
		</div>
		<div class="nav-list">
			<router-link to="/">
				<div class="nav-item">
					<div>Home</div>
					<img :src="homeIcon" alt="" />
				</div>
			</router-link>
			<router-link to="/cart"
				><div class="nav-item">
					<div>Cart</div>
					<img :src="cartPageicon" alt="" /></div
			></router-link>
			<div>
				<input class="nav-search" placeholder="search..." type="text" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #9cb380;
	border-radius: 10px;
	padding: 20px;
	margin-top: 20px;
	position: sticky;
	top: 0;
}
.logo {
	width: 150px;
	height: 50px;
}

.nav-list {
	display: flex;
	gap: 40px;
	font-size: 22px;
}

.nav-item {
	color: white;
	display: flex;
	align-items: center;
	gap: 8px;
	background-color: #dbd8ae;
	padding: 5px;
	border-radius: 5px;
}

.nav-search {
	height: 30px;
	border-radius: 5px;
	border: none;
	padding: 5px;
	font-size: 18px;
}
</style>
