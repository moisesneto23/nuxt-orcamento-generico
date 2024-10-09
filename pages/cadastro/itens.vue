<template>
    <div id="cadastroOrcamento"> 
      <cadastro-item class="mb-8"></cadastro-item>
      <listagem-item></listagem-item>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
 // import { useStore } from 'vuex';

  
  // Store namespaces e actions
//   const store = useStore();
//   const obterTodosItens = () => store.dispatch('Item/OBTER_ITENS');
//   const ativarCarregamento = () => store.dispatch('ATIVAR_CARREGAMENTO');
//   const desativarCarregamento = () => store.dispatch('DESATIVAR_CARREGAMENTO');
  
  // Lógica de carregamento e obtenção de itens
//   onMounted(async () => {
//     try {
//       await ativarCarregamento();
//       await obterTodosItens();
//     } finally {
//       await desativarCarregamento();
//     }
//   });
  </script>
  
  <style scoped>
  #cadastroOrcamento {
    background-color: rgb(186, 186, 186);
  }
  </style>
  