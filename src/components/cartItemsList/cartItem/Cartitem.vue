<script setup>
import { useCartStore } from "../../../stores/CartStore";
import deleteIcon from "../../../assets/delete.svg";

const props = defineProps(["product"]);

const cartStore = useCartStore();
</script>

<template>
	<div class="list">
		<div>
			<p class="list-name">
				{{ product.name }}
			</p>
		</div>
		<div class="quantity-wrapper">
			<p class="quantity-wrapper-number">
				{{ product.quantityInCart }}
			</p>
		</div>

		<div>
			<p class="list-singlePrice">{{ product.price }} руб.</p>
		</div>
		<div class="total-wrapper">
			<p>{{ product.priceInCart }} руб.</p>
			<img
				:src="deleteIcon"
				class="btn remove-btn"
				@click="cartStore.removeFromCart(product)" />
		</div>
	</div>
</template>

<style scoped>
.list {
	display: grid;
	grid-template-columns: 520px 260px 300px 300px;
	margin-bottom: 30px;
}

.quantity-wrapper {
	display: flex;
	align-items: center;
	gap: 8px;
}

.btn {
	border-radius: 3px;
	background-color: #7eaa92;
	border: none;
	width: 32px;
	font-size: 18px;
	color: #fff;
	cursor: pointer;
}

.total-wrapper {
	display: flex;
	align-items: center;
	justify-content: space-around;
}

.remove-btn:hover {
	background-color: #ff6666;
	transition: 0.5s;
}
</style>
