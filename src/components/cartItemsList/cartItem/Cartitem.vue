<script setup>
import { useCartStore } from "../../../stores/CartStore";
import deleteIcon from "../../../assets/delete.svg";
import increase from "../../../assets/add.svg";
import decrease from "../../../assets/minus.svg";
import { useModalStore } from "../../../stores/ModalStore";

const modalStore = useModalStore();
const cartStore = useCartStore();

const props = defineProps(["product"]);

const increaseQuantity = (product) => {
	if (props.product.quantityInCart < props.product.remainingQuantity) {
		cartStore.addItemTocart(product, 1);
	}
};

const decreaseQuantity = (item) => {
	if (props.product.quantityInCart > 1) {
		cartStore.minusItem(item);
	} else {
		modalStore.toggleModal();
		modalStore.currentObject.value = props.product;
	}
};

const handleRemoveItem = () => {
	modalStore.toggleModal();
	cartStore.removeFromCart(props.product);
};
</script>

<template>
	<div class="list">
		<div>
			<p class="list-name">
				{{ product.name }}
			</p>
		</div>
		<div class="quantity-wrapper">
			<img
				class="quantityIcons"
				@click="decreaseQuantity(product)"
				:src="decrease"
				alt="" />
			<p class="quantity-wrapper-number">
				{{ product.quantityInCart }}
			</p>
			<img
				class="quantityIcons"
				@click="increaseQuantity(product)"
				:src="increase"
				alt="" />
		</div>

		<div>
			<p class="list-singlePrice">{{ Math.floor(product.price) }} руб.</p>
		</div>
		<div class="total-wrapper">
			<p>{{ Math.floor(product.priceInCart) }} руб.</p>
			<img :src="deleteIcon" class="btn remove-btn" @click="handleRemoveItem" />
		</div>
	</div>
</template>

<style scoped>
.list {
	display: grid;
	grid-template-columns: 550px 260px 300px 300px;
	margin-bottom: 30px;
}

.quantity-wrapper {
	display: flex;
	align-items: center;
	width: 100px;
	justify-content: space-between;
}

.quantityIcons {
	width: 25px;
	height: 25px;
	background-color: #7eaa92;
	padding: 5px;
	border-radius: 5px;
	cursor: pointer;
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
	justify-content: space-between;
	width: 200px;
}

.remove-btn:hover {
	background-color: #ff6666;
	transition: 0.5s;
}
</style>
