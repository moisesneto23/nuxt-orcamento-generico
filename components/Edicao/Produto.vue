<template>
    <div justify="center">
      <!-- Diálogo de Edição do Produto -->
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Editar Produto</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Nome do produto*"
                    required
                    v-model="exibeProduto.nome"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indica campo obrigatorio</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" class="mx-4" @click="processarEdicao(exibeProduto)">
              Salvar Edição
            </v-btn>
            <v-btn color="grey" @click="dialog = false">
              <b>Cancelar</b> 
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  
      <!-- Botão para abrir o diálogo -->
      <v-btn  @click="dialog = true">
        <v-icon>mdi-circle-edit-outline</v-icon> 
      </v-btn>
    </div>
  </template>
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  //import { useStore } from 'vuex';
  import ProdutoDto from '@/Model/Produtos/ProdutoDto';
  //import { ProdutosActionTypes } from '@/store/Produtos/actions';
 // import { GlobalActionTypes } from '@/store/actions';
  
  // Props
  const props = defineProps<{ produto: ProdutoDto }>();
  
  // Vuex store
 // const store = useStore();
  
  // Estado local do diálogo
  const dialog = ref(false);
  
  // Computed para exibir o produto
  const exibeProduto = computed(() => props.produto);
  
  // Ações do Vuex
  //const editaProduto = (produto: ProdutoDto) => store.dispatch(ProdutosActionTypes.EDITAR_PRODUTO, produto);
//   const ativarCarregamento = () => store.dispatch(GlobalActionTypes.ATIVAR_CARREGAMENTO);
//   const desativarCarregamento = () => store.dispatch(GlobalActionTypes.DESATIVAR_CARREGAMENTO);
  
  // Função para processar a edição do produto
  const processarEdicao = async (produto: ProdutoDto) => {
    // ativarCarregamento();
    // try {
    //   await editaProduto(produto);
    //   dialog.value = false;
    // } catch (error) {
    //   alert('Algo deu errado nesta operação');
    // } finally {
    //   desativarCarregamento();
    // }
  };
  </script>
  