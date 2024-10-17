<template>
    <v-expansion-panels focusable>
       <v-expansion-panel
        v-for="categoriaProduto in categoriaProdutos"
        :key="categoriaProduto.id"
        class="mb-2"
      >
      
        <v-expansion-panel-title>
          <h1>{{ categoriaProduto.descricao }}</h1>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
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
        </v-expansion-panel-text>
      </v-expansion-panel> 
    </v-expansion-panels>
  </template>
  
  <script setup lang="ts">

const storeCP = storeCategoriaProdutos();
const {categoriaProdutos} = storeToRefs(storeCP);
const {desativarLoad, ativarLoad} = storeGlobal();

  
  // Definir os componentes importados
 
  
  // Acessar o estado e as ações da store usando Vuex
  //const store = useStore();
  
  // Estado
 // const categoriasProduto = reactive(() => store.state.produto.categoriasProduto);

  // Ações
 // const removerCategoriaProduto = (id: number) => store.dispatch(ProdutosActionTypes.REMOVER_CATEGORIA_PRODUTO, id);
  
  // Método para excluir a categoria
  const excluirCategoriaProduto = async (id: number) => {
    ativarLoad();
    storeCP.removerCategoriaProdutos(id);
    desativarLoad();
  };
  </script>
  