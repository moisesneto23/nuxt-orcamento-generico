import type ProdutoDto from "~/Model/Produtos/ProdutoDto";
import ProdutoService from "~/Service/Produtos/ProdutoService";


export const storeProdutos = defineStore('produtos', () => {
    
    const produtos = ref<ProdutoDto[]>([]);

    const adicionarProdutos = (dados: ProdutoDto[]) => {
        produtos.value = dados;
    };

    const removerProduto = (id: number) => {
        const serviceProduto = new ProdutoService();
        serviceProduto.delete(id).then(()=>{
            produtos.value = produtos.value.filter((i)=> i.id !== id );
        }); 
    }

    const editarProduto = (dado: ProdutoDto) =>{
        const serviceProduto = new ProdutoService();
        serviceProduto.editarProduto(dado).then(()=>{
            
            produtos.value = produtos.value.filter((i)=> i.id !== dado.id );
            produtos.value.push(dado);
        }); 
    } 
    return {produtos, adicionarProdutos, removerProduto, editarProduto };
});