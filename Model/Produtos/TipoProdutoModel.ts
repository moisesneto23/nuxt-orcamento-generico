import CategoriaProdutoModel from '@/Model/Produtos/CategoriaProdutoDto';
export default class TipoProdutoModel {
    id!: number;
    descricao!: string;
    categoriaProdutoId!: number;
    categoriaProduto!: CategoriaProdutoModel;
}