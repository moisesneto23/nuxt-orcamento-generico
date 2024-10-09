<template>
    <v-expansion-panels focusable v-if="dialog">
      <!-- <v-expansion-panel v-for="produto in produtos" :key="produto.id" class="mb-2">
        <v-expansion-panel-header>
          <h3>{{ produto.nome }}</h3>
          <v-divider vertical class="mx-2"></v-divider>
          <h4>
            Categoria Produto: 
            <h5>{{ produto.categoriaProduto.descricao }}</h5>
          </h4>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="mt-10">
          <dialogo-item-produto :produtoId="produto.id" @produto-adicao-concluido="buscaItensProduto" />
          <hr />
          <v-row>
            <v-col cols="6">
              <edicao-produto :produto="produto"></edicao-produto>
              <h3>Editar</h3>
            </v-col>
  
            <v-col cols="6">
              <v-btn @click="excluirProduto(produto.id)">
                <v-icon>mdi-trash-can-outline</v-icon>
              </v-btn>
              <h3 class="text-center">Excluir</h3>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel> -->
    </v-expansion-panels>
  
    <v-dialog v-model="dialog" persistent max-width="600px" v-else>
      <div>ok</div>
    </v-dialog>
  </template>
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  //import { useStore } from 'vuex';
//   import EdicaoProduto from './EdicaoProduto.vue';
//   import DialogoItemProduto from '../ItemProduto/DialogoItemProduto.vue';
  //import { useProdutosStore } from '@/store/produtos'; // Pinia ou Vuex
  
//   // Definindo componentes
//   const components = {
//     EdicaoProduto,
//     DialogoItemProduto,
//   };
  
  // Estado local
  const dialog = ref(true);
  
  // Ações e estado de Vuex/Pinia
  //const store = useStore();
//   const produtos = computed(() => store.state.produtos);
//   const removerProduto = store.dispatch('ProdutosActionTypes.REMOVER_PRODUTO');
//   const obterItensProduto = store.dispatch('ProdutosActionTypes.OBTER_ITEMS_PRODUTO_DIMENCAO');
//   const ativarCarregamento = store.dispatch('GlobalActionTypes.ATIVAR_CARREGAMENTO');
//   const desativarCarregamento = store.dispatch('GlobalActionTypes.DESATIVAR_CARREGAMENTO');
  
  // Função para excluir produto
  const excluirProduto = async (id: number) => {
    // ativarCarregamento();
    // try {
    //   await removerProduto(id);
    //   desativarCarregamento();
    // } catch {
    //   alert("Algo deu errado nesta operação");
    //   desativarCarregamento();
    // }
  };
  
  // Buscar itens do produto
  const buscaItensProduto = async () => {
    // ativarCarregamento();
    // try {
    //   await obterItensProduto();
    //   desativarCarregamento();
    // } catch {
    //   alert("Algo deu errado nesta operação");
    //   desativarCarregamento();
    // }
  };
  
  // Inicialização ao montar o componente
  onMounted(() => {
    buscaItensProduto();
  });
  </script>
  