
import  ItemDto from '~/Model/Itens/ItemDto';

import type { AppHttpFetch, AppHttpUseFetch } from '~/plugins/http';

export default class ItemService {
    private $http: AppHttpFetch;
    private $httpUseFetch: AppHttpUseFetch;

  constructor( ) {
    const app = useNuxtApp();
    this.$http = app.$http; 
    this.$httpUseFetch = app.$httpUseFetch;
  }

 

    public async obterTodosItens(): Promise<ItemDto[]> {
       // store.dispatch('ATIVAR_CARREGAMENTO');
        const result = await this.$http.get(`Item`);
        //store.dispatch('DESATIVAR_CARREGAMENTO');
        console.log(result);
        return result;
    }

    public async obterTodosItenSSr(): Promise<ItemDto[]> {
       const result = await this.$httpUseFetch.get(`Item`);
       console.log(result);
       return result;
   }

    public async salvarItem(Item: ItemDto): Promise<any> {
       // store.dispatch('ATIVAR_CARREGAMENTO');

        const result = await this.$http.post(`Item`, Item);
       // store.dispatch('DESATIVAR_CARREGAMENTO');
    }

    public async editarItem(Item: ItemDto): Promise<ItemDto> {
        //store.dispatch('ATIVAR_CARREGAMENTO');
        const result = await this.$http.patch(`Item`, Item);
       // store.dispatch('DESATIVAR_CARREGAMENTO');
        return result.data;
        
    }
    public async delete(id: any) : Promise<any>{
       // store.dispatch('ATIVAR_CARREGAMENTO');
        const url =`Item/${id}`;
        await this.$http.delete(url).catch(() => {
            alert("Algo deu errado nesta operação")
          });
        //store.dispatch('DESATIVAR_CARREGAMENTO');
    }
}
