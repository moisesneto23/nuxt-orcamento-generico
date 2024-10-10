<template>
    <div id="cadastroOrcamento"> 
      <cadastro-item class="mb-8"></cadastro-item>
      <listagem-item></listagem-item>
    </div>
  </template>
  
  <script setup lang="ts">
import ItemService from '~/Services/Itens/ItemService';

  const { adicionarItens } = storeItens();

  onMounted(async () => {
    // try {
      const service = new ItemService();
      const dados = await service.obterTodosItens();
      adicionarItens(dados);
    // } finally {
    //  // await desativarCarregamento();
    // }
  });
  </script>
  
  <style scoped>
  #cadastroOrcamento {
    background-color: rgb(186, 186, 186);
  }
  </style>
  