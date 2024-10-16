<template>
  <div>
    <v-tabs v-model="tab" class="mt-2" grow icons-and-text bg-color="primary" color="white">

      <v-tab :value="'tab-3'">
        Produtos
        <v-icon>mdi-shape-square-plus</v-icon>
      </v-tab>

      <v-tab :value="'tab-1'">
        Categorias
        <v-icon>mdi-format-list-group-plus</v-icon>
      </v-tab>
    </v-tabs>

    <!-- Conteúdo dos tabs -->
    <div v-if="tab === 'tab-3'">
      <v-card-text>
        <ListagemProduto />
      </v-card-text>
      <CadastroProduto />
    </div>

    <div v-if="tab === 'tab-1'">
      <v-card-text>
        <ListagemCategoriaProduto />
      </v-card-text>
      <CadastroCategoriaProduto />
    </div>
  </div>
</template>

<script setup lang="ts">
import CategoriaProdutoService from '~/Service/Produtos/CategoriaProdutoService';


// ativarLoad();
const serviceCategoriasProduto = new CategoriaProdutoService();
const categoriasProdutoSSr = await serviceCategoriasProduto.obterTodasCategoriasProduto();
const categoriasStore = storeCategoriaProdutos();
categoriasStore.adicionarcategoriaProdutos(categoriasProdutoSSr);
//desativarLoad();
// Estado da aba atual
const tab = ref('tab-3');
</script>
