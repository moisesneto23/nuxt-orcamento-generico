import { AppHttpAxios } from '@/axios/AppHttpAxios';
import { Inject } from 'typescript-ioc';
import { RecuperacaoSenhaRequest } from './Request/RecuperacaoSenhaRequest';

export default class EmailService  {
    
    @Inject
    private $http!: AppHttpAxios;

    public async pedidoCodigoTrocaSenha(email :string): Promise<string> {
        const request = {
            email: email};
            const result = await this.$http.post('email/recupera-senha', request);
            if (result.status === 200) {
               return result.data.mensagem; // Retorna os dados apenas se a solicitação foi bem-sucedida
              }
              else
            return result.data.mensagem;
   }

   public async trocaDeSenha(request : RecuperacaoSenhaRequest) : Promise<any> {
    const result = await this.$http.post('email/troca-senha', request);
   }
}