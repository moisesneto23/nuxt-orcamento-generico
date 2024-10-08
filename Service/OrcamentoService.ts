import { AppHttpAxios } from '@/axios/AppHttpAxios';
import { Inject } from 'typescript-ioc';
import {ValorProdutoRequest } from './Request/ObterOrcamentoRequest';
import qs from 'qs';
export class OrcamentoService {
    @Inject
    private $http!: AppHttpAxios;

    public async ObterOrcamentoProduto(request: ValorProdutoRequest): Promise<string> {
        const queryString = qs.stringify(request);
        const response = await this.$http.get(`orcamento/?${queryString}`,{responseType: 'blob', timeout: 120000});
     return URL.createObjectURL(response.data);
      }

      public async ObterOrcamentoProdutoExato(request: ValorProdutoRequest): Promise<string> {
        const queryString = qs.stringify(request);
        const response = await this.$http.get(`orcamento/exato/?${queryString}`,{responseType: 'blob', timeout: 120000});
     return URL.createObjectURL(response.data);
        }
}



