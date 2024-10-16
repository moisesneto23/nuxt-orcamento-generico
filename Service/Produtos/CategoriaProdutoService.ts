
import {CategoriaProdutoDto} from '@/Model/Produtos/CategoriaProdutoDto';
import { AppHttpFetch, AppHttpUseFetch } from '~/plugins/http';
import { storeGlobal } from '~/store/Global';


export default class CategoriaProdutoService {
    
    private $http: AppHttpFetch;
    private $httpUseFetch: AppHttpUseFetch;
    private carregamento ;
  constructor( ) {
    this.$http =  new AppHttpFetch(); 
    this.$httpUseFetch = new AppHttpUseFetch();
    this.carregamento = storeGlobal();
  }

  public async obterTodasCategoriasProduto(): Promise<CategoriaProdutoDto[]> {
    const result = await this.$httpUseFetch.get(`CategoriaProduto/`);
    return result;
}

public async salvarCategoriaProduto(categoria: CategoriaProdutoDto): Promise<any> {
    const result = await this.$http.post('CategoriaProduto', categoria);
    return result;
}

public async editarCategoriaProduto(categoria: CategoriaProdutoDto): Promise<CategoriaProdutoDto> {
    const result = await this.$http.patch('CategoriaProduto', categoria);
    return result;
}
public async delete(id: any) : Promise<any>{
    const url =`CategoriaProduto/${id}`;
    await this.$http.delete(url);
}
};