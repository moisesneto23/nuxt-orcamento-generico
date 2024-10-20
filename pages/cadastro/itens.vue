<template>
    <div id="cadastroOrcamento"> 
      <br><br>
      <cadastro-item class="mb-8"></cadastro-item>
      <listagem-item></listagem-item>
    </div>
  </template>
  
  <script setup lang="ts">
 import ItemService from '~/Service/Itens/ItemService';

 definePageMeta({
  middleware: 'auth'
});
  
  </script>
  
  <style scoped>
  #cadastroOrcamento {
    background-color: rgb(186, 186, 186);
  }
  </style>
  