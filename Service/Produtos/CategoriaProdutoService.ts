
import {CategoriaProdutoDto} from '@/Model/Produtos/CategoriaProdutoDto';
import { CategoriaProdutoRepository } from '@/Repository/Produtos/CategoriaProdutoRepository';
import { Inject } from 'typescript-ioc';

export default class CategoriaProdutoService {
    
    @Inject
    private _categoriaRepository!: CategoriaProdutoRepository;

    public async obterTodasCategoriasProduto(): Promise<CategoriaProdutoDto[]> {
        return await this._categoriaRepository.obterTodasCategoriasProduto();
    }

    public async salvarCategoriaProduto(Produto:CategoriaProdutoDto): Promise<any> {
         await this._categoriaRepository.salvarCategoriaProduto(Produto);
    }

    public async editarCategoriaProduto(Produto:CategoriaProdutoDto): Promise<CategoriaProdutoDto> {
       return await this._categoriaRepository.editarCategoriaProduto(Produto);
    }
    public async delete(id: number): Promise<any>{
        await this._categoriaRepository.delete(id);
    }
};