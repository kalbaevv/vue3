import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("modalStore", () => {
	const isModalOpen = ref(false);
	const currentObject = ref({});

	function toggleModal() {
		isModalOpen.value = !isModalOpen.value;
		console.log(currentObject.value, "currentObj");
	}

	return { isModalOpen, toggleModal, currentObject };
});
