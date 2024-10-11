<template>
    <div id="cadastroOrcamento"> 
      <!-- <cabecalho class="py-64"></cabecalho> -->
      <cadastro-item class="mb-8"></cadastro-item>
      <listagem-item></listagem-item>
    </div>

    <div>
      <h1>Dados dos Módulos Vindo do servidor</h1>
      <div >
        <ul>
          <li v-for="module in data" :key="module.id">aaaa {{ module }}</li>
        </ul>
      </div>
     <div>
      <h2>itens por httpSSr</h2>
      <ul>
          <li v-for="itemm in itens" :key="itemm.id">aaaa {{ itemm }}</li>
        </ul>
     </div>
    </div>
  </template>
  
  <script setup lang="ts">
 import ItemService from '~/Service/Itens/ItemService';
 const httpSSr = new ItemService();
 const itens = await httpSSr.obterTodosItenSSr();


  onMounted(async () => { 
     try { //dados carregados no lado do cliente
      const service = new ItemService();
      const dados = await service.obterTodosItens();
      storeItens().adicionarItens(dados);
     } finally {
    //  // await desativarCarregamento();
     }
  });
  
  </script>
  
  <style scoped>
  #cadastroOrcamento {
    background-color: rgb(186, 186, 186);
  }
  </style>
  