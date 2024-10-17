<template>
  <div>
    <v-tabs v-model="tab" class="mt-2 bg-purple-darken-2"  grow icons-and-text density="compact"  color="green-lighten-1">

      <v-tab value="one">
        Produtos
        <v-icon>mdi-shape-square-plus</v-icon>
      </v-tab>

      <v-tab value="two">
        Categorias
        <v-icon>mdi-format-list-group-plus</v-icon>
      </v-tab>
    </v-tabs>

    <!-- Conteúdo dos tabs -->
    <v-tabs-window v-model="tab">

      <v-tabs-window-item value="one">
      <v-card-text>
        <ListagemProduto />
      </v-card-text>
      <CadastroProduto />
    </v-tabs-window-item>

    <v-tabs-window-item value="two">
      <v-card-text>
        <ListagemCategoriaProduto />
      </v-card-text>
      <CadastroCategoriaProduto />
    </v-tabs-window-item>

    </v-tabs-window>
    
  </div>
</template>

<script setup lang="ts">
import CategoriaProdutoService from '~/Service/Produtos/CategoriaProdutoService';


const {ativarLoad, desativarLoad } = storeGlobal();
onMounted( async () => {
   ativarLoad();
const serviceCategoriasProduto = new CategoriaProdutoService();
const categoriasProdutoSSr = await serviceCategoriasProduto.obterTodasCategoriasProduto();
const categoriasStore = storeCategoriaProdutos();
categoriasStore.adicionarCategoriaProdutos(categoriasProdutoSSr);
desativarLoad();
})

// Estado da aba atual
const tab = ref();
</script>
