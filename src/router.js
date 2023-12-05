import { createRouter, createWebHashHistory } from "vue-router";
import Cart from "../src/pages/cart/Cart.vue";
import ItemsList from "../src/components/itemsList/ItemsList.vue";
export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: "/",
			component: ItemsList,
		},
		{
			path: "/cart",
			component: Cart,
		},
	],
});
