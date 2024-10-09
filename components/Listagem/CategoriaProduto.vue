<template>
    <v-expansion-panels focusable>
      <!-- <v-expansion-panel
        v-for="categoriaProduto in categoriasProduto"
        :key="categoriaProduto.id"
        class="mb-2"
      >
      
        <v-expansion-panel-header>
          <h1>{{ categoriaProduto.descricao }}</h1>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col cols="6">
              <edicao-categoria-produto
                :categoriaProduto="categoriaProduto"
              ></edicao-categoria-produto>
              <h3 class="text-center">Editar</h3>
            </v-col>
            <v-col cols="6">
              <v-btn
                color="error"
                
                @click="excluirCategoriaProduto(categoriaProduto.id)"
              >
                <v-icon>mdi-trash-can-outline</v-icon>
              </v-btn>
              <h3 class="text-center">Excluir</h3>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel> -->
    </v-expansion-panels>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  //import { useStore } from 'vuex';
  //import EdicaoCategoriaProduto from '@/components/Produtos/CategoriaProduto/EditacaoCategoriaProduto.vue';
  import { CategoriaProdutoDto } from '@/Model/Produtos/CategoriaProdutoDto';
  //import { ProdutosActionTypes } from '@/store/Produtos/actions';
  
  // Definir os componentes importados
 
  
  // Acessar o estado e as ações da store usando Vuex
  //const store = useStore();
  
  // Estado
 // const categoriasProduto = reactive(() => store.state.produto.categoriasProduto);

  // Ações
 // const removerCategoriaProduto = (id: number) => store.dispatch(ProdutosActionTypes.REMOVER_CATEGORIA_PRODUTO, id);
  
  // Método para excluir a categoria
  const excluirCategoriaProduto = async (id: number) => {
   // await removerCategoriaProduto(id);
  };
  </script>
  