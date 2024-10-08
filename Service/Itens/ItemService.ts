import { AppHttpAxios } from '@/axios/AppHttpAxios';
import ItemModel from "@/Model/Itens/ItemDto";
import { Inject } from "typescript-ioc";
import store from '@/store/index';

export default class ItemService {
   

    @Inject
    private $http!: AppHttpAxios;
    private idEmpresa = this.pegaIdEmpresa();
    private pegaIdEmpresa(): number{
        let id = localStorage.getItem('businessId') || '0';
        return parseInt(id);
    }

    public async obterTodosItens(): Promise<ItemModel[]> {
        store.dispatch('ATIVAR_CARREGAMENTO');
        const result = await this.$http.get(`Item/${this.idEmpresa}`);
        store.dispatch('DESATIVAR_CARREGAMENTO');
        return result.data;
    }

    public async salvarItem(Item: ItemModel): Promise<any> {
        store.dispatch('ATIVAR_CARREGAMENTO');
        Item.empresaId = this.idEmpresa;
        const result = await this.$http.post(`Item`, Item);
        store.dispatch('DESATIVAR_CARREGAMENTO');
    }

    public async editarItem(Item: ItemModel): Promise<ItemModel> {
        store.dispatch('ATIVAR_CARREGAMENTO');
        const result = await this.$http.patch(`Item`, Item);
        store.dispatch('DESATIVAR_CARREGAMENTO');
        return result.data;
        
    }
    public async delete(id: any) : Promise<any>{
        store.dispatch('ATIVAR_CARREGAMENTO');
        const url =`Item/${id}`;
        await this.$http.delete(url).catch(() => {
            alert("Algo deu errado nesta operação")
          });
        store.dispatch('DESATIVAR_CARREGAMENTO');
    }
}