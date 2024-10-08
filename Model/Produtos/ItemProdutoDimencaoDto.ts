import ProdutoDto from "./ProdutoDto";
import ItemDto from "../Itens/ItemDto";
import { DimencaoDto } from "../Itens/DimencaoDto";


export default class ItemProdutoDimencaoDto {
  public id!: number;
  public nome!: string;
  public valorTotal!: number;
  public quantidade: number = 1;
  public valorAdicional: number = 0;
  public produto!: ProdutoDto;
  public produtoId!: number;
  public dimencao!: DimencaoDto;
  public dimencaoId!: number;
  public valorVenda!: number;
  public valorCompra!: number;
  public somatorioLargura: number = 0;
  public somatorioALtura: number= 0 ;
  public somatorioComprimento: number = 0 ;
  public coeficienteComprimento: number = 1 ;
  public coeficienteLargura: number = 1;
  public coeficienteAltura: number = 1;
  public item!: ItemDto;
  public itemId!: number;
  public  nomeUnidadeMedida!: string;
}
