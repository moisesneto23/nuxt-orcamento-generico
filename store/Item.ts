import ItemDto from "~/Model/Itens/ItemDto";

export const storeItens = defineStore('itens', () => {
    
    const itens = ref<ItemDto[]>([]);

    const adicionarItens = (dados: ItemDto[]) => {
        itens.value = dados;
    };

    const removerItem = (id: number) => {
        itens.value = itens.value.filter((i)=> i.id !== id );
    }

    return {itens, adicionarItens, removerItem };
});