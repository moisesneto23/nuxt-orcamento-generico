<template>
  <cabecalho-visitante />
    <v-container>
      <v-form ref="form">
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="empresa.nome"
              label="Nome da Empresa"
              required
              color="teal"
              :error-messages="getErrorMessage('nomeEmpresa')"
              ref="nomeEmpresa"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="colaborador.email"
              label="E-mail"
              required
              type="email"
              color="teal"
              :rules="emailRules"
              ref="email"
            />
          </v-col>
        </v-row>
  
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="colaborador.nome"
              label="Nome do Proprietário"
              required
              color="teal"
              :error-messages="getErrorMessage('nomeGerente')"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="empresa.telefone"
              label="Telefone da Empresa"
              required
              v-mask="'(##) #####-####'"
              color="teal"
              :error-messages="getErrorMessage('telefone')"
            />
          </v-col>
        </v-row>
  
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="empresa.cnpj"
              label="CNPJ"
              required
              v-mask="'##.###.###/####-##'"
              color="teal"
              :error-messages="getErrorMessage('cnpj')"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="colaborador.cpf"
              label="CPF do Proprietário"
              required
              v-mask="'###.###.###-##'"
              color="teal"
              :error-messages="getErrorMessage('cpf')"
            />
          </v-col>
        </v-row>
  
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="colaborador.senha"
              label="Senha"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              required
              color="teal"
              @click:append="showPassword = !showPassword"
              :error-messages="getErrorMessage('senha')"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="confirmaSenha"
              label="Confirme a Senha"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              required
              color="teal"
              @click:append="showPassword = !showPassword"
              :error-messages="verificaConfirmacaoSenha()"
            />
          </v-col>
        </v-row>
  
        <h2>Endereço</h2>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="endereco.cidade"
              label="Cidade"
              required
              color="teal"
              :error-messages="getErrorMessage('cidade')"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="endereco.estado"
              label="Estado"
              required
              color="teal"
              :error-messages="getErrorMessage('estado')"
            />
          </v-col>
        </v-row>
  
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="endereco.bairro"
              label="Bairro"
              required
              color="teal"
              :error-messages="getErrorMessage('bairro')"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="endereco.rua"
              label="Logradouro"
              required
              color="teal"
              :error-messages="getErrorMessage('rua')"
            />
          </v-col>
        </v-row>
  
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="endereco.numero"
              label="Número"
              required
              color="teal"
              :error-messages="getErrorMessage('numero')"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="endereco.cep"
              label="CEP"
              v-mask="'##.###-###'"
              color="teal"
              :error-messages="getErrorMessage('cep')"
            />
          </v-col>
        </v-row>
  
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="endereco.complemento"
            label="Complemento"
            color="teal"
          />
        </v-col>
  
        <v-row>
          <v-col cols="12">
            <transition name="fade" mode="out-in">
              <v-btn @click="cadastrarEmpresa" color="primary" class="btn-animation">Cadastrar</v-btn>
            </transition>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </template>
  
  <style scoped>
  .btn-animation-enter-active,
  .btn-animation-leave-active {
    transition: opacity 0.5s;
  }
  .btn-animation-enter,
  .btn-animation-leave-to {
    opacity: 0;
  }
  </style>
  
  <script setup lang="ts">
  import  EmpresaDto  from '@/Model/Empresa/EmpresaDto';
  import { ColaboradorDto } from '@/Model/ColaboradorDto';
  import { EnderecoDto } from '@/Model/EnderecoDto';
  import Login from '@/Model/Login';
  import { EmpresaService } from '~/Services/EmpresaService';
  
  const service = new EmpresaService()
  const router = useRouter();
  
  const empresa = ref<EmpresaDto>(new EmpresaDto());
  const colaborador = ref<ColaboradorDto>(new ColaboradorDto());
  const endereco = ref<EnderecoDto>(new EnderecoDto());
  const confirmaSenha = ref<string>('');
  const showPassword = ref<boolean>(false);
  
  const emailRules = [
    (v: string) => !!v || 'E-mail é obrigatório',
    (v: string) => 
      /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail inválido',
  ];
  
  const getErrorMessage = (fieldName: string) => {
    switch (fieldName) {
      case 'nomeEmpresa':
        return !empresa.value.nome ? ['Campo obrigatório'] : null;
      case 'nomeGerente':
        return !colaborador.value.nome ? ['Campo obrigatório'] : null;
      case 'telefone':
        return !empresa.value.telefone ? ['Campo obrigatório'] : null;
      case 'cnpj':
        return !empresa.value.cnpj ? ['Campo obrigatório'] : null;
      case 'cpf':
        return !colaborador.value.cpf ? ['Campo obrigatório'] : null;
      case 'senha':
        return !colaborador.value.senha ? ['Campo obrigatório'] : null;
      case 'cidade':
        return !endereco.value.cidade ? ['Campo obrigatório'] : null;
      case 'estado':
        return !endereco.value.estado ? ['Campo obrigatório'] : null;
      case 'bairro':
        return !endereco.value.bairro ? ['Campo obrigatório'] : null;
      case 'rua':
        return !endereco.value.rua ? ['Campo obrigatório'] : null;
      case 'numero':
        return !endereco.value.numero ? ['Campo obrigatório'] : null;
      case 'cep':
        return !endereco.value.cep ? ['Campo obrigatório'] : null;
      default:
        return null;
    }
  };
  
  const verificaConfirmacaoSenha = () => {
    return colaborador.value.senha === confirmaSenha.value ? null : ['Confirmação de senha incorreta'];
  };
  
  const validarFormulario = () => {
    if (
      !empresa.value.nome ||
      !colaborador.value.nome ||
      !empresa.value.telefone ||
      !empresa.value.cnpj ||
      !colaborador.value.cpf ||
      !colaborador.value.senha ||
      !endereco.value.cidade ||
      !endereco.value.estado ||
      !endereco.value.bairro ||
      !endereco.value.rua ||
      !endereco.value.numero ||
      !endereco.value.cep ||
      !/^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(colaborador.value.email)
    ) {
      return false;
    }
    return true;
  };
  
  const cadastrarEmpresa = async () => {
    if (validarFormulario() && verificaConfirmacaoSenha() === null) {
      empresa.value.colaboradores.push(colaborador.value);
      empresa.value.enderecos.push(endereco.value);
  
      await service.cadastrarEmpresa(empresa.value)
        .then(async () => {
          await service.obterInformacoesEmpresa(new Login(colaborador.value.email, colaborador.value.senha));
          router.push(Rotas.Inicio);
        });
      alert('Cadastro realizado com sucesso!');
    }
  };
  </script>
  