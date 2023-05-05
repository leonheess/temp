import { ref, Ref } from 'vue';
import { defineStore } from 'pinia';

export const useStore = defineStore('store', () => {
  const isLoading: Ref<boolean> = ref(true);

  function init() {
    isLoading.value = true;
    setTimeout(() => (isLoading.value = false), 3000);
  }

  return {
    init,
    isLoading,
  };
});
