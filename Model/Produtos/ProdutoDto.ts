import {CategoriaProdutoDto} from "./CategoriaProdutoDto";
import ProdutoItemDimencaoDto from "./ItemProdutoDimencaoDto";


export default class ProdutoDto {
  public id!: number;
  public nome!: string;
  public valorVenda!: number;
  public valorCusto!: number;
  public categoriaProduto!: CategoriaProdutoDto;
  public categoriaProdutoId!: number;
  public ProdutosItensDimencao: ProdutoItemDimencaoDto[] = [];
  public possuiLargura: boolean = false ;
  public possuiComprimento: boolean = false ;
  public possuiAltura: boolean = false ;
}