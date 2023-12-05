<script setup>
import { computed } from "vue";

import { useCartStore } from "../../stores/CartStore";
import CartItem from "./cartItem/Cartitem.vue";

const cartStore = useCartStore();

const cartArray = computed(() => cartStore.cartArray);
</script>

<template>
	<CartItem v-for="product in cartArray" :product="product" :key="product.id" />
</template>

<style scoped></style>
