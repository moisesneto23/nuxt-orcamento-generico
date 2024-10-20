import ItemProdutoDimencaoDto from "~/Model/Produtos/ItemProdutoDimencaoDto";
import type ProdutoDto from "~/Model/Produtos/ProdutoDto";
import ItemProdutoDimencaoService from "~/Service/Produtos/ItemProdutoDimencaoService";
import ProdutoService from "~/Service/Produtos/ProdutoService";


export const storeProdutos = defineStore('produtos', () => {
    
    const produtos = ref<ProdutoDto[]>([]);
    const itensProdutoDimencao = ref<ItemProdutoDimencaoDto[]>([]);
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

    const adicionarItensProdutoDimencao = (dados: ItemProdutoDimencaoDto[]) => {
        itensProdutoDimencao.value = dados;
    };

    const removerItemProdutoDimencao = async (id: number) => {
        const serviceProduto = new ItemProdutoDimencaoService();
        serviceProduto.delete(id).then(()=>{
            itensProdutoDimencao.value = itensProdutoDimencao.value.filter((i)=> i.id !== id );
        }); 
    }

    const editarItemProdutoDimencao = (dado: ItemProdutoDimencaoDto) =>{
        const serviceProduto = new ItemProdutoDimencaoService();
        serviceProduto.editarItemProduto(dado).then(()=>{
            
            itensProdutoDimencao.value = itensProdutoDimencao.value.filter((i)=> i.id !== dado.id );
            itensProdutoDimencao.value.push(dado);
        }); 
    } 
    return {
        produtos,
        adicionarProdutos, removerProduto, editarProduto,
        itensProdutoDimencao,
        adicionarItensProdutoDimencao, removerItemProdutoDimencao, editarItemProdutoDimencao
     };
});