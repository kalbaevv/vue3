<script setup>
import warningIcon from "../../assets/warning.svg";
import { useModalStore } from "../../stores/ModalStore";
import { useCartStore } from "../../stores/CartStore";

const cartStore = useCartStore();
const modalStore = useModalStore();

const handleConfirm = () => {
	cartStore.minusItem(modalStore.currentObject.value);
	modalStore.toggleModal();
};
</script>

<template>
	<div class="modal">
		<div class="modalWrapper">
			<div>
				<img class="icon" :src="warningIcon" alt="" />
			</div>
			<div class="warningQuestion">
				<p>Вы уверены?</p>
			</div>
			<div class="warningDescr">
				<p>Вы удалите продукт полностью с корзины</p>
			</div>
			<div class="warningButtons">
				<button class="btn btnCancel" @click="modalStore.toggleModal">
					Отменить
				</button>
				<button class="btn btnConfirm" @click="handleConfirm">
					Да, удалить!
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
.modal {
	color: #fff;
	width: 300px;
	height: 300px;
	background-color: #596f62;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 10px;
	box-shadow: 0 0 0 50vmax rgba(0, 0, 0, 0.5);
}

.modalWrapper {
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: 30px;
}

.icon {
	margin-top: 8px;
	width: 40px;
	height: 40px;
}

.warningQuestion {
	font-size: 20px;
}

.warningDescr {
	opacity: 0.5;
}

.warningButtons {
	width: 300px;
	display: flex;
	justify-content: space-around;
}

.btn {
	padding: 7px;
	border: none;
	font-size: 16px;
	border-radius: 5px;
	color: #fff;
	cursor: pointer;
}

.btnCancel {
	background-color: #c1c1c1;
}

.btnConfirm {
	background-color: #df6b51;
}
</style>
