import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cartStore", () => {
	const localCardArray = JSON.parse(localStorage.getItem("cart"));

	if (!localCardArray) {
		localStorage.setItem("cart", JSON.stringify([]));
	}

	const cartArray = ref(JSON.parse(localStorage.getItem("cart")));
	console.log(cartArray.value, "cartarry");
	const cartTotal = ref(0);

	function addItemTocart(item, quantityInCart) {
		const existingItemIndex = cartArray.value.findIndex(
			(cartItem) => cartItem.id === item.id
		);
		const priceInCart = item.price;

		if (existingItemIndex === -1) {
			cartArray.value.push({
				...item,
				quantityInCart,
				priceInCart,
			});
			localStorage.setItem("cart", JSON.stringify(cartArray.value));
		} else {
			cartArray.value[existingItemIndex].quantityInCart += quantityInCart;
			cartArray.value[existingItemIndex].priceInCart *=
				cartArray.value[existingItemIndex].quantityInCart;
		}
	}

	function removeFromCart(product) {
		cartArray.value = cartArray.value.filter((item) => item.id !== product.id);

		localStorage.setItem("cart", JSON.stringify(cartArray.value));

		console.log(cartArray.value, "clicked");
	}

	function loadCartFromLocalStorage() {
		const storedCart = localStorage.getItem("cart");
		cartArray.value = storedCart ? JSON.parse(storedCart) : [];
		return cartArray.value;
	}

	return {
		cartArray,
		cartTotal,
		addItemTocart,
		removeFromCart,
		loadCartFromLocalStorage,
	};
});
