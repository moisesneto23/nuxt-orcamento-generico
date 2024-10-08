export class ObterValorProdutoResponse {
    public ValorCusto!: number;
    public ValorVenda!: number;
    public ArquivoOrcamento!: string;
  }
  


  export class ValorProdutoRequest {
    public ProdutoId!: number;
    public Largura!: number;
    public Altura!: number;
    public Comprimento!: number;
    public NomeProduto!: string;
    public Observacoes!: string
  }