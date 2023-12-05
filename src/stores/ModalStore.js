import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("modalStore", () => {
	const isModalOpen = ref(false);

	function toggleModal() {
		isModalOpen.value = !isModalOpen.value;
	}

	return { isModalOpen, toggleModal };
});
