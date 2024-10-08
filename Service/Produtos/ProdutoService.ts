

import ProdutoDto from '@/Model/Produtos/ProdutoDto';
import { AppHttpAxios } from '@/axios/AppHttpAxios';
import { Inject } from 'typescript-ioc';
import store from '@/store/index';

export default class ProdutoService {
    @Inject
private $http!: AppHttpAxios;
private idEmpresa = this.pegaIdEmpresa();
private pegaIdEmpresa(): number{
    let id = localStorage.getItem('businessId') || '0';
    return parseInt(id);
}


    public async obterProdutosComItensCadastrados(): Promise<ProdutoDto[]> {
        store.dispatch('ATIVAR_CARREGAMENTO');
        const result = await this.$http.get(`Produto/${this.idEmpresa}/itens-cadastrados`);
        store.dispatch('DESATIVAR_CARREGAMENTO');
        return result.data; 
    }

    public async obterTodosProdutos(): Promise<ProdutoDto[]> {
        const result = await this.$http.get(`Produto/${this.idEmpresa}`);
        return result.data;
    }


    public async salvarProduto(produto: ProdutoDto): Promise<any> {
        const result = await this.$http.post(`Produto/${this.idEmpresa}`, produto);
    }


    public async editarProduto(produto: ProdutoDto): Promise<ProdutoDto> {
        const result = await this.$http.patch(`Produto/${this.idEmpresa}`, produto);
        return result.data;
    }

    public async delete(id: any) : Promise<any>{
        const url =`Produto/${id}`;
        await this.$http.delete(url);
    }

    public async obterTodosProdutosPorCategoria(idCategoria: number) {
        const result = await this.$http.get(`Produto/${this.idEmpresa}/Categorias/${idCategoria}`);
        return result.data;
      }
};








