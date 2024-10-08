import  PedidoProdutoDto  from '@/Model/Pedido/PedidoProdutoDto';
import { AppHttpAxios } from '@/axios/AppHttpAxios';
import { Inject } from "typescript-ioc";
import store from '@/store/index';
export default class PedidoProdutoService {
    
    @Inject
private $http!: AppHttpAxios;
private idEmpresa = this.pegaIdEmpresa();
private pegaIdEmpresa(): number{
    let id = localStorage.getItem('businessId') || '0';
    return parseInt(id);
}




    public async obterPedidoProdutosPorProdutoId(pedidoId: number): Promise<PedidoProdutoDto[]> {
        store.dispatch('ATIVAR_CARREGAMENTO');
       
        const result = await this.$http.get(`empresas/${this.idEmpresa}/pedido-produtos?pedidoId=${pedidoId}`);
        store.dispatch('DESATIVAR_CARREGAMENTO');
        return result.data;
    }


    public async salvarPedidoProduto(Pedido: PedidoProdutoDto): Promise<any> {
        store.dispatch('ATIVAR_CARREGAMENTO');
        const result = await this.$http.post(`empresas/${this.idEmpresa}/pedido-produtos`, Pedido);
        store.dispatch('DESATIVAR_CARREGAMENTO');
        return result.data;
    }


    public async editarPedido(Pedido: PedidoProdutoDto): Promise<PedidoProdutoDto> {
      
        store.dispatch('ATIVAR_CARREGAMENTO');
        const result = await this.$http.patch(`empresas/${this.idEmpresa}/pedidos`, Pedido);
        store.dispatch('DESATIVAR_CARREGAMENTO');
        return result.data;
    }

    public async delete(id: number) : Promise<any>{
        const url =`empresas/${this.idEmpresa}/pedido-produtos/${id}`;
        await this.$http.delete(url);
        store.dispatch('DESATIVAR_CARREGAMENTO');
    }

    public async obterTodosPedidosPorCategoria(idCategoria: number) {
        const result = await this.$http.get(`empresas/${this.idEmpresa}/pedidos/${idCategoria}`);
        store.dispatch('DESATIVAR_CARREGAMENTO');
        return result.data;
      }
};