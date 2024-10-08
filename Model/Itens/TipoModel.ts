import  CategoriaModel  from '@/Model/Itens/CategoriaDto';
export default class TipoModel{
public id!: number;
public descricao!: string;
public categoriaItemId!: number;
public categoriaItem!: CategoriaModel;
} 