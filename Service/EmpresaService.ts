import { AppHttpAxios } from '@/axios/AppHttpAxios';
import Login from '@/Model/Login';
import { Inject } from 'typescript-ioc';
import InformacoesEmpresa  from '../Model/InformacoesEmpresa';
import EmpresaDto from '@/Model/Empresa/EmpresaDto';
import store from '@/store/index';

export default class EmpresaService  {
    
    @Inject
    private $http!: AppHttpAxios;

    public async obterInformacoesEmpresa(login: Login): Promise<InformacoesEmpresa> {
        store.dispatch('ATIVAR_CARREGAMENTO');
        const res = await this.$http.post('Usuario/Login',login);
        store.dispatch('DESATIVAR_CARREGAMENTO');
        return res.data;
    }

    public async cadastrarEmpresa(empresa: EmpresaDto) : Promise<any>{
        store.dispatch('ATIVAR_CARREGAMENTO');
        const res = await this.$http.post('Empresa',empresa);
        store.dispatch('DESATIVAR_CARREGAMENTO');
        return res.data;
    }
}
