import { AppHttpAxios } from '@/axios/AppHttpAxios';
import { DimencaoDto } from '@/Model/Itens/DimencaoDto';

import { Inject } from 'typescript-ioc';

export default class DimencaoService {
    @Inject
    private $http!: AppHttpAxios;

    public async obterDimencoes(): Promise<DimencaoDto> {

        const result = await this.$http.get('Dimencao');
        return result.data;
    }
};