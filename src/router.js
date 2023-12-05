import { createRouter, createWebHashHistory } from "vue-router";
import Cart from "../src/pages/cart/Cart.vue";
import HomePage from "../src/components/homePage/HomePage.vue";
export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: "/",
			component: HomePage,
		},
		{
			path: "/cart",
			component: Cart,
		},
	],
});
