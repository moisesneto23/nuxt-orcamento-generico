<template>
    <div>
      <v-container>
        <v-col>
          <v-text-field
            v-model="email"
            type="email"
            label="E-mail"
            required
          ></v-text-field>
  
          <v-text-field
            v-model="senha"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            label="Senha"
            hint="At least 8 characters"
            counter
            @click:append="togglePasswordVisibility"
          ></v-text-field>
  
          <v-btn color="#ff9800" large @click="fazerLogin">
            <b>Fazer Login</b>
          </v-btn>
        </v-col>
      </v-container>
      <h3>
        <v-btn dark color="#37474F" @click="irParaRecuperarSenha">
          Esqueci a Senha
        </v-btn>
      </h3>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import Login from '@/Model/Login'; 
  import { EmpresaService } from '~/Service/EmpresaService';
  
  // Estados reativos
  const email = ref('');
  const senha = ref('');
  const showPassword = ref(false);
  const {ativarLoad, desativarLoad} = storeGlobal();
  
  
  const sericeEmpresa = new EmpresaService();
  
  // Métodos
  const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
  };

  const {adicionarInformacoesEmpresa} = storeInformacoesEmpresa();
  
  const irParaRecuperarSenha = () => {
    navigateTo(Rotas.Visitante.RecuperarSenha);
  };
  
  const fazerLogin = async () => {
    ativarLoad();
    const login = new Login(email.value, senha.value);
    
    try {
      const dado = await sericeEmpresa.obterInformacoesEmpresa(login);
      adicionarInformacoesEmpresa(dado);
      localStorage.setItem("ocirenegotnemacro", dado.token);
      const app = useNuxtApp();
      app.$token.setToken(dado.token);
      navigateTo(Rotas.Inicio)
    } catch (error) {
      console.error('Falha no login:', error);
    } finally {
    desativarLoad();
    }
  };
  </script>
  
  <style scoped>
  /* Seus estilos personalizados */
  </style>
  