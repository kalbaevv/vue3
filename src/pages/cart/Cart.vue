<script setup>
import CartItemsList from "../../components/cartItemsList/CartItemsList.vue";
import WarningModal from "../../components/warningModal/WarningModal.vue";
import { useModalStore } from "../../stores/ModalStore";

const modalStore = useModalStore();
</script>

<template>
	<div class="cartSection">
		<div class="cartParams">
			<div>Наименование товара и описание</div>
			<div>Количество</div>
			<div>Цена за шт</div>
			<div>Сумма</div>
		</div>
	</div>
	<div class="list">
		<CartItemsList />
	</div>
	<div v-if="modalStore.isModalOpen">
		<WarningModal />
	</div>
</template>

<style scoped>
.cartSection {
	background-color: #94a89a;
	margin-top: 30px;
	border-radius: 5px 5px 0 0;
}

.cartParams {
	padding: 20px;
	display: grid;
	grid-template-columns: 540px 260px 300px 300px;
}

.list {
	border-radius: 0 0 5px 5px;
	padding: 20px;
	color: #fff;
	background-color: #45503b;
	height: 500px;
	overflow-y: auto;
	overflow-x: hidden;
}
</style>
