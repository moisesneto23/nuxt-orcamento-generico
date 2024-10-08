import { ColaboradorDto } from "../ColaboradorDto";
import { EnderecoDto } from "../EnderecoDto";

export default class EmpresaDto {
    public  id! : number;
    public  nome! : string;
    public  cnpj !: string;
    public  telefone!: string;
    public colaboradores: ColaboradorDto[] = [];
    public enderecos: EnderecoDto[] = [];
}
