<template>
    <div justify="center">
      <v-dialog v-model="dialogproduto" persistent max-width="800px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Criar produto Unitario</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Nome do produto*"
                    v-model="produto.nome"
                    required
                  ></v-text-field>
                </v-col>
  
                <v-col cols="12" sm="6">
                  <!-- <v-select
                    :items="descricaoCategorias"
                    label="Selecione a Categoria do produto*"
                    required
                    v-model="select"
                  ></v-select> -->
                </v-col>
              </v-row>
            </v-container>
            <small>*indica campo obrigatorio</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" @click="selecionaIdSelect(); salvarproduto()">
              Salvar
            </v-btn>
            <v-btn color="grey" @click="dialogproduto = false">
              <b>Cancelar</b>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-btn @click="dialogproduto = true" color="purple" :rounded="true">
        <v-icon>mdi-shape-square-plus</v-icon>
        Criar Produto
      </v-btn>
    </div>
  </template>
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  //import { useStore } from 'vuex';
  import  ProdutoDto  from '@/Model/Produtos/ProdutoDto';
  import { CategoriaProdutoDto } from '@/Model/Produtos/CategoriaProdutoDto';
 // import { useGlobalLoadingActions, useProdutosActions } from '@/store/actions';
  
  // Referências para o estado e ações da store (Vuex)
  //const store = useStore();
  //const categoriasProduto = computed(() => store.state.produto.categoriasProduto as CategoriaProdutoDto[]);
  
  const produto = ref(new ProdutoDto());
  const select = ref('');
  const dialogproduto = ref(false);
  let idSelect: number | undefined = undefined;
  
  // Funções e métodos
  //const descricaoCategorias = computed(() => categoriasProduto.value.map(c => c.descricao));
  
  function selecionaIdSelect() {
    //idSelect = categoriasProduto.value.find(x => x.descricao == select.value)?.id;
  }
  
  async function salvarproduto() {
    // useGlobalLoadingActions().ativarCarregamento();
  
    // if (idSelect) {
    //   produto.value.categoriaProdutoId = idSelect;
    // }
  
    // try {
    //   await useProdutosActions().salvarProduto(produto.value);
    //   dialogproduto.value = false;
    // } catch (error) {
    //   alert("Algo deu errado nesta operação");
    // } finally {
    //   useGlobalLoadingActions().desativarCarregamento();
    // }
  }
  </script>
  