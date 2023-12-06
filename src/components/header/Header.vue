<script setup>
import { ref, watch, computed } from "vue";

import logo from "../../assets/logo.svg";
import homeIcon from "../../assets/home.svg";
import cartPageicon from "../../assets/cartPage.svg";
import arrowUp from "../../assets/arrawUp.svg";
import arrowDown from "../../assets/arrowDown.svg";
import { useItemStore } from "../../stores/itemStore";

const itemStore = useItemStore();

const prevExchangeRate = ref(0);
const isActive = ref("home");

const handleClickHome = () => {
	isActive.value = "home";
	console.log(isActive.value);
};

const handleClickCart = () => {
	isActive.value = "cart";
	console.log(isActive.value);
};

setInterval(() => {
	itemStore.setExchangeRate();
}, 15000);

watch(
	() => itemStore.exchangeRate,
	(_, oldVal) => {
		prevExchangeRate.value = oldVal;
	}
);

const exchangeRateChange = computed(() => {
	if (itemStore.exchangeRate > prevExchangeRate.value) {
		return arrowUp;
	} else {
		return arrowDown;
	}
});
</script>

<template>
	<div class="nav">
		<div>
			<img class="logo" :src="logo" alt="" />
		</div>
		<div class="nav-list">
			<router-link to="/">
				<div class="nav-item">
					<div
						:class="isActive === 'home' ? isActiveStyle : ''"
						@click="handleClickHome">
						Домой
					</div>
					<img :src="homeIcon" alt="" />
				</div>
			</router-link>
			<router-link to="/cart"
				><div class="nav-item">
					<div
						:class="isActive === 'cart' ? isActiveStyle : ''"
						@click="handleClickCart">
						Корзина
					</div>
					<img :src="cartPageicon" alt="" /></div
			></router-link>
			<div class="exchangeWrapper">
				<p class="exchangeRate">{{ itemStore.exchangeRate }}</p>
				<img class="exchangeIcon" :src="exchangeRateChange" alt="" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #596f62;
	border-radius: 10px;
	padding: 20px;
	margin-top: 20px;
	position: sticky;
	top: 0;
	z-index: 1;
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
	color: #fff;
	display: flex;
	align-items: center;
	gap: 8px;
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

.exchangeWrapper {
	display: flex;
	align-items: center;
}

.exchangeIcon {
	height: 20px;
	width: 20px;
}

.isActiveStyle {
	background-color: red;
}
</style>
