
import ItemProdutoDimencaoDto from '@/Model/Produtos/ItemProdutoDimencaoDto';
import { AppHttpFetch, AppHttpUseFetch } from '~/plugins/http';
export default class ItemProdutoDimencaoService {
    
 

    private $http: AppHttpFetch;
    private $httpUseFetch: AppHttpUseFetch;
  constructor( ) {
    this.$http =  new AppHttpFetch(); 
    this.$httpUseFetch = new AppHttpUseFetch();
  }
   
    public async obterTodosItensProdutoDimencao(): Promise<ItemProdutoDimencaoDto[]> {
        const result = await this.$http.get(`ItemProdutoDimencao`);
        return result;
    }

    public async obterItensCadastradoPorProduto(idProduto: number): Promise<ItemProdutoDimencaoDto[]> {
        const result = await this.$httpUseFetch.get(`ItemProdutoDimencao/produto/${idProduto}`);
        return result;
    }

    public async salvarItemProduto(Item: ItemProdutoDimencaoDto): Promise<any> {
        const result = await this.$http.post('ItemProdutoDimencao', Item);
        return result;
    }

    public async editarItemProduto(Item: ItemProdutoDimencaoDto): Promise<ItemProdutoDimencaoDto> {
        const result = await this.$http.patch('ItemProdutoDimencao', Item);
        return result;
    }
    public async delete(id: any) : Promise<any>{
        const url =`ItemProdutoDimencao/${id}`;
        await this.$http.delete(url);
    }
};