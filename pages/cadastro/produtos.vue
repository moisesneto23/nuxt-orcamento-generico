<template>
    <div >
      <hr />
      <div id="cadastro-de-produto-completo"></div>
      <v-tabs v-model="tab" class="mt-2" grow icons-and-text background-color="#9575CD" color="f2f2f2">
        <v-tabs-slider></v-tabs-slider>
  
        <v-tab href="#tab-3">
          Produtos
          <v-icon>mdi-shape-square-plus</v-icon>
        </v-tab>
  
        <v-tab href="#tab-1">
          Categorias
          <v-icon>mdi-format-list-group-plus</v-icon>
        </v-tab>
      </v-tabs>
  
      <v-tabs-items v-model="tab" data-app style="background-color: #f2f2f2;">
        <v-tab-item value="tab-3">
          <div>
            <v-card-text>
              <ListagemProduto />
            </v-card-text>
            <CadastroProduto />
          </div>
        </v-tab-item>
  
        <v-tab-item value="tab-1">
          <div>
            <v-card-text>
              <ListagemCategoriaProduto />
            </v-card-text>
            <CadastroCategoriaProduto />
          </div>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'

  definePageMeta({
  middleware: 'auth'
});
//   import CadastroCategoriaProduto from '@/components/Produtos/CategoriaProduto/CadastroCategoriaProduto.vue'
//   import ListagemCategoriaProduto from '@/components/Produtos/CategoriaProduto/ListagemCategoriaProduto.vue'
//   import ListagemProduto from '@/components/Produtos/Produto/ListagemProduto.vue'
//   import CadastroProduto from '@/components/Produtos/Produto/CadastroProduto.vue'
  
  // Estado reativo para a aba atual
  const tab = ref(null)
  </script>
  
  <style scoped>
  #cadastroOrcamento {
    /* Adicione estilos personalizados se necessário */
  }
  </style>
  