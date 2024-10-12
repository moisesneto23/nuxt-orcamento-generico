
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
        const result = await this.$http.get(`Item`);
        return result;
    }

    public async obterTodosItenSSr(): Promise<ItemDto[]> {
       const result = await this.$httpUseFetch.get(`Item`);
       return result;
   }

    public async salvarItem(Item: ItemDto): Promise<any> {
        const result = await this.$http.post(`Item`, Item);
       return result;
    }

    public async editarItem(Item: ItemDto): Promise<void> {
         await this.$http.patch(`Item`, Item);
    }

    public async delete(id: any) : Promise<any>{
        const url =`Item/${id}`;
        await this.$http.delete(url);
    }
}
