
export const storeGlobal = defineStore('global', () => {
    
    const loadCarregamento = ref<boolean>(false);

    const ativarLoad = () => {
       loadCarregamento.value = true;
    };

    const desativarLoad = () => {
        loadCarregamento.value =false;
    }  

    return {desativarLoad, ativarLoad, loadCarregamento };
});