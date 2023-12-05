import { ref, watch } from "vue";
import { defineStore } from "pinia";

export const useItemStore = defineStore("itemStore", () => {
	const exchangeRate = ref(30);

	const mapData = (data1, data2) => {
		const mappedData = [];

		data1.Value.Goods.forEach((product1) => {
			const category2 = data2[product1.G];

			if (category2) {
				const product2 = category2.B[product1.T];

				if (product2) {
					const mappedProduct = {
						name: product2.N,
						price: convertToRUB(product1.C),
						remainingQuantity: product1.P,
						id: product1.T,
					};

					let categoryIndex = mappedData.findIndex(
						(category) => category.name === category2.G
					);

					if (categoryIndex === -1) {
						categoryIndex = mappedData.length;
						mappedData.push({
							name: category2.G,
							products: [],
						});
					}
					mappedData[categoryIndex].products.push(mappedProduct);
				}
			}
		});

		return mappedData;
	};

	const convertToRUB = (priceUSD) => {
		return priceUSD * 30;
	};

	const setExchangeRate = () => {
		exchangeRate.value = Math.floor(Math.random() * 50) + 20;
	};

	return {
		mapData,
		setExchangeRate,
		exchangeRate,
	};
});
