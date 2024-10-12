import { EdicaoItem } from './../.nuxt/components.d';
import ItemDto from "~/Model/Itens/ItemDto";
import ItemService from "~/Service/Itens/ItemService";

export const storeItens = defineStore('itens', () => {
    
    const itens = ref<ItemDto[]>([]);

    const adicionarItens = (dados: ItemDto[]) => {
        itens.value = dados;
    };

    const removerItem = (id: number) => {
        const serviceItem = new ItemService();
        serviceItem.delete(id).then(()=>{
            itens.value = itens.value.filter((i)=> i.id !== id );
        }); 
    }

    const editarItem = (dado: ItemDto) =>{
        const serviceItem = new ItemService();
        serviceItem.editarItem(dado).then(()=>{
            
            itens.value = itens.value.filter((i)=> i.id !== dado.id );
            itens.value.push(dado);
        }); 
    }

    
    

    return {itens, adicionarItens, removerItem, editarItem };
});