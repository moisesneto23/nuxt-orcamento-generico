
import EmpresaDto from '../Empresa/EmpresaDto';

export default class ItemDto {
  public id!: number;
  public nome!: string;
  public valorVenda!: number;
  public valorCompra!: number;
  public empresa!: EmpresaDto | null;
  public empresaId!: number;
   public tipoUnidadeMedidaId!: number;
   public  nomeUnidadeMedida!: string; 
   public QuantidadeMinimaPorTipoUnidade!: number
}