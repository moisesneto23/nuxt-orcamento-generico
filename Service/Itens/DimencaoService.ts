
import { DimencaoDto } from '@/Model/Itens/DimencaoDto';
import { AppHttpFetch, AppHttpUseFetch } from '~/plugins/http';

export default class DimencaoService {
    private $http: AppHttpFetch;
    private $httpUseFetch: AppHttpUseFetch;

  constructor( ) {
    this.$http =  new AppHttpFetch(); 
    this.$httpUseFetch = new AppHttpUseFetch();
  }

    public async obterDimencoes(): Promise<DimencaoDto> {

        const result = await this.$httpUseFetch.get('Dimencao');
        return result;
    }
};