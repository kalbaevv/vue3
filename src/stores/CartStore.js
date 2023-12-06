import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cartStore", () => {
	const localCardArray = JSON.parse(localStorage.getItem("cart"));

	if (!localCardArray) {
		localStorage.setItem("cart", JSON.stringify([]));
	}

	const cartArray = ref(JSON.parse(localStorage.getItem("cart")));

	const cartTotal = ref(0);

	function addItemTocart(item, quantityInCart) {
		const existingItemIndex = cartArray.value.findIndex(
			(cartItem) => cartItem.id === item.id
		);

		if (existingItemIndex === -1) {
			const priceInCart = item.price * quantityInCart;
			cartArray.value.push({
				...item,
				quantityInCart,
				priceInCart,
			});
			localStorage.setItem("cart", JSON.stringify(cartArray.value));
		} else {
			cartArray.value[existingItemIndex].quantityInCart += quantityInCart;
			cartArray.value[existingItemIndex].priceInCart +=
				item.price * quantityInCart;
			localStorage.setItem("cart", JSON.stringify(cartArray.value));
		}
	}

	function removeFromCart(product) {
		cartArray.value = cartArray.value.filter((item) => item.id !== product.id);

		localStorage.setItem("cart", JSON.stringify(cartArray.value));

		console.log(cartArray.value, "clicked");
	}

	function minusItem(product) {
		const cart = cartArray.value;

		const productInCart = cart.find((item) => item.id === product.id);
		if (productInCart) {
			productInCart.quantityInCart -= 1;
			productInCart.priceInCart -= product.price;

			if (productInCart.quantityInCart === 0) {
				const index = cart.indexOf(productInCart);
				cart.splice(index, 1);
			}
		}

		localStorage.setItem("cart", JSON.stringify(cart));
	}

	return {
		cartArray,
		cartTotal,
		addItemTocart,
		removeFromCart,
		minusItem,
	};
});
