<script setup>
import { ref } from "vue";

import cart from "../../assets/cart.svg";
import { useCartStore } from "../../stores/CartStore";
import changePrice from "../../utils/changePrice";
import ruble from "../../assets/ruble.svg";

const props = defineProps(["products"]);

const cartStore = useCartStore();

const quantityToCart = ref(1);
const changedPrice = ref(props.products.price);

setInterval(() => {
	props.products.price = changePrice(changedPrice.value);
	return changePrice(props.products.price);
}, 15000);

function increaseQuantityToCart() {
	if (quantityToCart.value < props.products.remainingQuantity) {
		quantityToCart.value += 1;
	} else {
		alert("количество ограничено");
	}
}

function decreaseQuantityToCart() {
	if (quantityToCart.value > 0) {
		quantityToCart.value -= 1;
	}
}

function handleClick(item, quantityToCart) {
	if (item.remainingQuantity >= quantityToCart) {
		item.remainingQuantity -= quantityToCart;
		cartStore.addItemTocart(item, quantityToCart);
		console.log(quantityToCart, "quan");
	} else {
		alert("количество ограничено");
	}
}
</script>
<template>
	<div class="container">
		<div class="section">
			<div class="content">
				<div class="leftContent">
					<div class="title">
						<p>{{ products.name }}</p>
					</div>
					<div class="quantityCartWrapper">
						<p class="quantity">кол-во: {{ products.remainingQuantity }}</p>
						<div class="cartButtons">
							<button @click="decreaseQuantityToCart" class="decreaseButton">
								-
							</button>
							<p class="cartQuantity">{{ quantityToCart }}</p>
							<button @click="increaseQuantityToCart" class="decreaseButton">
								+
							</button>
						</div>
						<img
							@click="() => handleClick(products, quantityToCart)"
							class="cartIcon"
							:src="cart"
							alt="" />
					</div>
				</div>
				<div class="rightContent">
					<div class="priceWrapper">
						<p class="price">{{ Math.floor(products.price) }}</p>
						<img class="rubleIcon" :src="ruble" alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.content {
	min-height: 200px;
	margin: 20px;
	width: 400px;
	display: flex;
	justify-content: space-between;
	background-color: #596f62;
	padding: 20px;
	border-radius: 10px;
	color: white;
	box-shadow: 10px 10px #1c3144;
	transition: transform 0.3s ease-out;
}

.content:hover {
	transform: translateY(-5px);
}

.leftContent {
	background-color: #596f62;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.quantityCartWrapper {
	margin-top: 20px;
	display: flex;
	gap: 25px;
	align-items: center;
}

.quantity {
	font-size: 18px;
	color: #f0f0f0;
}

.cartButtons {
	display: flex;
	align-items: center;
}

.decreaseButton {
	padding: 5px;
	width: 30px;
	background-color: #cacc90;
	border-radius: 5px;
	border: none;
	color: white;
	font-size: 20px;
	cursor: pointer;
}

.cartQuantity {
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 18px;
	width: 30px;
	background-color: #7ea16b;
	height: 32px;
	color: #fff;
	border-radius: 5px;
	font-family: "Roboto", sans-serif;
}

.price {
	font-size: 20px;
}

.cartIcon {
	background-color: #7ea16b;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
	width: 32px;
	border-radius: 5px;
	cursor: pointer;
}

.rightContent {
	background-color: #032b43;
	padding: 10px;
	border-radius: 10px;
	height: 30px;
	display: flex;
}

.priceWrapper {
	display: flex;
	align-items: center;
}

.rubleIcon {
	width: 20px;
	height: 20px;
}
</style>
