<!-- pages/visitante/Login.vue -->

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
  
          <v-btn color="#ff9800" large @click="">
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
  import { useRouter } from 'vue-router';
  //import { useAuthStore } from '@/stores/useAuthStore';
  import Login from '@/Model/Login'; // Certifique-se de que o caminho está correto
  
  // Estados reativos
  const email = ref('');
  const senha = ref('');
  const showPassword = ref(false);
  
  // Instâncias do Pinia e do Router
  //const authStore = useAuthStore();
  const router = useRouter();
  
  // Métodos
  const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
  };
  
  const irParaRecuperarSenha = () => {
    router.push('/visitante/recupera-senha');
  };
  
//   const fazerLogin = async () => {
//     await authStore.ativarCarregamento();
//     const login = new Login(email.value, senha.value);
    
//     try {
//       await authStore.fazerLogin(login);
//       // Redirecionamento é tratado na store
//     } catch (error) {
//       // Trate erros aqui, por exemplo, mostrar uma mensagem de erro ao usuário
//       console.error('Falha no login:', error);
//     } finally {
//       await authStore.desativarCarregamento();
//     }
//   };
  </script>
  
  <style scoped>
  /* Seus estilos personalizados */
  </style>
  