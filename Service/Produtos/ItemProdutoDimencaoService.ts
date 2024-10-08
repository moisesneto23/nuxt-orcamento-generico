
import ItemProdutoModel from '@/Model/Produtos/ItemProdutoDimencaoDto';
import {AppHttpAxios} from '@/axios/AppHttpAxios';
import { Inject } from 'typescript-ioc';

export default class ItemProdutoDimencaoService {
    
 


    @Inject
    private $http!: AppHttpAxios;
    private idEmpresa = this.pegaIdEmpresa();
    private pegaIdEmpresa(): number{
        let id = localStorage.getItem('businessId') || '0';
        return parseInt(id);
    }
   
    public async obterTodosItensProduto(): Promise<ItemProdutoModel[]> {
        const result = await this.$http.get(`ItemProdutoDimencao/${this.idEmpresa}`);
        return result.data;
    }

    public async obterItensCadastradoPorProduto(idProduto: number): Promise<ItemProdutoModel[]> {
        const result = await this.$http.get(`ItemProdutoDimencao/produto/${idProduto}`);
        return result.data;
    }

    public async salvarItemProduto(Item: ItemProdutoModel): Promise<any> {
        const result = await this.$http.post('ItemProdutoDimencao', Item);
    }

    public async editarItemProduto(Item: ItemProdutoModel): Promise<ItemProdutoModel> {
        const result = await this.$http.patch('ItemProdutoDimencao', Item);
        return result.data;
    }
    public async delete(id: any) : Promise<any>{
        const url =`ItemProdutoDimencao/${id}`;
        await this.$http.delete(url);
    }
};