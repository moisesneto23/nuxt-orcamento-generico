import { AppHttpAxios } from '@/axios/AppHttpAxios';
import PedidoDto from "@/Model/Pedido/PedidoDto";
import { Inject } from "typescript-ioc";
import store from '@/store/index';
export default class PedidoService {
    
    @Inject
private $http!: AppHttpAxios;
private idEmpresa = this.pegaIdEmpresa();
private pegaIdEmpresa(): number{
    let id = localStorage.getItem('businessId') || '0';
    return parseInt(id);
}




    public async obterTodosPedidos(): Promise<PedidoDto[]> {
        store.dispatch('ATIVAR_CARREGAMENTO');
        const result = await this.$http.get(`empresas/${this.idEmpresa}/pedidos`);
        store.dispatch('DESATIVAR_CARREGAMENTO');
        return result.data;
    }


    public async salvarPedido(Pedido: PedidoDto): Promise<any> {
        Pedido.empresaId = this.idEmpresa;
        store.dispatch('ATIVAR_CARREGAMENTO');
        const result = await this.$http.post(`empresas/${this.idEmpresa}/pedidos`, Pedido);
        store.dispatch('DESATIVAR_CARREGAMENTO');
        return result.data;
    }


    public async editarPedido(Pedido: PedidoDto): Promise<PedidoDto> {
        Pedido.empresaId = this.idEmpresa;
        store.dispatch('ATIVAR_CARREGAMENTO');
        const result = await this.$http.patch(`empresas/${this.idEmpresa}/pedidos`, Pedido);
        store.dispatch('DESATIVAR_CARREGAMENTO');
        return result.data;
    }

    public async delete(id: any) : Promise<any>{
        store.dispatch('ATIVAR_CARREGAMENTO');
        const url =`empresas/${this.idEmpresa}/pedidos/${id}`;
        await this.$http.delete(url);
        store.dispatch('DESATIVAR_CARREGAMENTO');
    }

    public async obterTodosPedidosPorCategoria(idCategoria: number) {
        store.dispatch('ATIVAR_CARREGAMENTO');
        const result = await this.$http.get(`empresas/${this.idEmpresa}/pedidos/${idCategoria}`);
        store.dispatch('DESATIVAR_CARREGAMENTO');
        return result.data;
      }

      public async comporInformacoesPedio(idPedido: number): Promise<any>{
        store.dispatch('ATIVAR_CARREGAMENTO');
        const result = await this.$http.patch(`empresas/${this.idEmpresa}/pedidos/${idPedido}`);
        store.dispatch('DESATIVAR_CARREGAMENTO');
      }
};