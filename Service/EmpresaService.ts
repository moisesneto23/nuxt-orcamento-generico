
import Login from '@/Model/Login';
import InformacoesEmpresa from '@/Model/InformacoesEmpresa';
import EmpresaDto from '@/Model/Empresa/EmpresaDto';
import type { AppHttpFetch } from '~/plugins/http';

export class EmpresaService {
  private $http: AppHttpFetch;

  constructor() {
    const app = useNuxtApp();
    this.$http = app.$http; 
  }

  public async obterInformacoesEmpresa(login: Login): Promise<InformacoesEmpresa> {
    const res = await this.$http.post<InformacoesEmpresa>('Usuario/Login', login);
    return res;
  }

  public async cadastrarEmpresa(empresa: EmpresaDto): Promise<any> {
    const res = await this.$http.post('Empresa', empresa);
    return res;
  }
}
