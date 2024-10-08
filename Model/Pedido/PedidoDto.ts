import ClienteDto from "../ClienteDto";
import PedidoProdutoDto from "./PedidoProdutoDto";

export default class PedidoDto {
    public id !: number;
    public descricao!: string;
    public valorTotal?: number;
    public empresaId!: number;
    public cliente?: ClienteDto;
    public clienteId?: number;
    public pedidoProdutos?: PedidoProdutoDto[];
    public indicaFinaliado ?: boolean; 
    public indicaVenda ?: boolean; 
}