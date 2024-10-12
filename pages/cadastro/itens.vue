<template>
    <div id="cadastroOrcamento"> 
      
      <listagem-item></listagem-item>
      <cadastro-item class="mb-8"></cadastro-item>
    </div>

    <!-- <div> 
      <h2>itens por httpSSr</h2>
      <ul>
          <li v-for="itemm in itens" :key="itemm.id">aaaa</li>
        </ul>
     </div>
    </div> -->
  </template>
  
  <script setup lang="ts">
 import ItemService from '~/Service/Itens/ItemService';
//  const httpSSr = new ItemService();
//  const itens = await httpSSr.obterTodosItenSSr();


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
  