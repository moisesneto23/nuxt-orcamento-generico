import CategoriaProdutoService from '~/Service/Produtos/CategoriaProdutoService';
import { CategoriaProdutoDto } from './../Model/Produtos/CategoriaProdutoDto';



export const storeCategoriaProdutos = defineStore('categoriaProdutos', () => {
    
    const categoriaProdutos = ref<CategoriaProdutoDto[]>([]);

    const adicionarcategoriaProdutos = (dados: CategoriaProdutoDto[]) => {
        categoriaProdutos.value = dados;
    };

    const removerItem = (id: number) => {
        const serviceItem = new CategoriaProdutoService();
        serviceItem.delete(id).then(()=>{
            categoriaProdutos.value = categoriaProdutos.value.filter((i)=> i.id !== id );
        }); 
    }

    const editarItem = (dado: CategoriaProdutoDto) =>{
        const serviceItem = new CategoriaProdutoService();
        serviceItem.editarCategoriaProduto(dado).then(()=>{
            
            categoriaProdutos.value = categoriaProdutos.value.filter((i)=> i.id !== dado.id );
            categoriaProdutos.value.push(dado);
        }); 
    }

    
    

    return {categoriaProdutos, adicionarcategoriaProdutos, removerItem, editarItem };
});