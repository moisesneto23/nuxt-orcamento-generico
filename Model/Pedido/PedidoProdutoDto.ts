export default class PedidoProdutoDto {
    public id !: number;
    public largura!: number;
    public altura?: number;
    public comprimento?: number;
    public valorAdicional: number = 0;
    public quantidade: number = 1;
    public produtoId!: number;
    public pedidoId!: number;
    public nomeProduto!: string;
    public possuiLargura: boolean = false ;
    public possuiComprimento: boolean = false ;
    public possuiAltura: boolean = false ;

}
