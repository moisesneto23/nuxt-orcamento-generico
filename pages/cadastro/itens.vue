<template>
    <div id="cadastroOrcamento"> 
      <br><br><br><br><br>
      <cadastro-item class="mb-8"></cadastro-item>
      <listagem-item></listagem-item>
    </div>
  </template>
  
  <script setup lang="ts">
 import ItemService from '~/Service/Itens/ItemService';

 definePageMeta({
  middleware: 'auth'
});
//  const httpSSr = new ItemService();
//  const itens = await httpSSr.obterTodosItenSSr();


  // onMounted(async () => { 
  //     const service = new ItemService();
  //     const dados = await service.obterTodosItens();
  //     storeItens().adicionarItens(dados);
  // });
  
  </script>
  
  <style scoped>
  #cadastroOrcamento {
    background-color: rgb(186, 186, 186);
  }
  </style>
  