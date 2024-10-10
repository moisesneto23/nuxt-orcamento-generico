
import  ItemDto from '~/Model/Itens/ItemDto';

import type { AppHttpFetch } from '~/plugins/http';

export default class ItemService {
    private $http: AppHttpFetch;

  constructor( ) {
    const app = useNuxtApp();
    this.$http = app.$http; 
  }

 

    public async obterTodosItens(): Promise<ItemDto[]> {
       // store.dispatch('ATIVAR_CARREGAMENTO');
        const result = await this.$http.get(`Item`);
        //store.dispatch('DESATIVAR_CARREGAMENTO');
        return result.data;
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
