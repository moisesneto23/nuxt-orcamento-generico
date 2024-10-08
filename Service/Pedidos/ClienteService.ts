import { Inject } from 'typescript-ioc';
import { AppHttpAxios } from './../../axios/AppHttpAxios';
import ClienteDto from '@/Model/ClienteDto';
import store from '@/store/index';
export default class ClienteService {
    
    @Inject
private $http!: AppHttpAxios;
private idEmpresa = this.pegaIdEmpresa();
private pegaIdEmpresa(): number{
    let id = localStorage.getItem('businessId') || '0';
    return parseInt(id);
}






    public async salvarCliente(cliente: ClienteDto): Promise<any> {
        store.dispatch('ATIVAR_CARREGAMENTO');
        cliente.empresaId = this.idEmpresa;
        const result = await this.$http.post(`empresas/${this.idEmpresa}/clientes`, cliente);
        store.dispatch('DESATIVAR_CARREGAMENTO');
    }


    public async editarCliente(Cliente: ClienteDto): Promise<ClienteDto> {
        store.dispatch('ATIVAR_CARREGAMENTO');
        const result = await this.$http.put(`empresas/${this.idEmpresa}/clientes`, Cliente);
        store.dispatch('DESATIVAR_CARREGAMENTO');
        return result.data;
    }

    public async delete(id: any) : Promise<any>{
        store.dispatch('ATIVAR_CARREGAMENTO');
        const url =`empresas/${this.idEmpresa}/clientes/${id}`;
        await this.$http.delete(url);
        store.dispatch('DESATIVAR_CARREGAMENTO');
    }

    public async obterTodosClientes(): Promise<ClienteDto[]> {
        store.dispatch('ATIVAR_CARREGAMENTO');
        const result = await this.$http.get(`empresas/${this.idEmpresa}/clientes`);
        store.dispatch('DESATIVAR_CARREGAMENTO');
        return result.data;
      }
};