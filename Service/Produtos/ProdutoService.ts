

import ProdutoDto from '@/Model/Produtos/ProdutoDto';
import { AppHttpFetch, AppHttpUseFetch } from '~/plugins/http';
import { storeGlobal } from '~/store/Global';

export default class ProdutoService {
   
    private $http: AppHttpFetch;
    private $httpUseFetch: AppHttpUseFetch;
    private carregamento ;
  constructor( ) {
    this.$http =  new AppHttpFetch(); 
    this.$httpUseFetch = new AppHttpUseFetch();
    this.carregamento = storeGlobal();
  }

    public async obterProdutosComItensCadastrados(): Promise<ProdutoDto[]> {
        this.carregamento.ativarLoad();
        const result = await this.$http.get(`Produto/itens-cadastrados`);
        this.carregamento.desativarLoad();
        return result; 
    }

    public async obterTodosProdutos(): Promise<ProdutoDto[]> {
        const result = await this.$httpUseFetch.get(`Produto`);
        return result;
    }


    public async salvarProduto(produto: ProdutoDto): Promise<ProdutoDto[]> {
        const result = await this.$http.post(`Produto`, produto);
        return result;
    }


    public async editarProduto(produto: ProdutoDto): Promise<ProdutoDto> {
        const result = await this.$http.patch(`Produto`, produto);
        return result;
    }

    public async delete(id: any) : Promise<any>{
        const url =`Produto/${id}`;
        await this.$http.delete(url);
    }

    public async obterTodosProdutosPorCategoria(idCategoria: number) {
        const result = await this.$http.get(`Produto/Categorias/${idCategoria}`);
        return result.data;
      }
};








