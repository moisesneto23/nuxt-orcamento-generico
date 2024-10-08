import EmpresaDto from "./Empresa/EmpresaDto";
import { EnderecoDto } from "./EnderecoDto";
import PedidoDto from "./Pedido/PedidoDto";

export default class ClienteDto {
    public id !: number;
    public nome!: string;
    public telefone?: string;
    public cpf?: string;
    public enderecos?: EnderecoDto[];
    public pedidos?: PedidoDto[];
   // public vendas?: VendaDto[];
    public empresa!: EmpresaDto;
    public empresaId!: number;
}