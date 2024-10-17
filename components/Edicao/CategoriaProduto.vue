<template>
    <div justify="center">
      <v-dialog v-slot:activator="{ props: dialogo }" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Criar Categoria</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Nome da categoria*"
                    required
                    v-model="categoriaProduto.descricao"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indica campo obrigatório</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" @click="processarEdicao(categoriaProduto)">
              Salvar
            </v-btn>
            <v-btn color="grey" @click="dialogo.value = false">
              <b>Cancelar</b>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-btn  color="#8E24AA" @click="dialogo = true">
        <v-icon>mdi-circle-edit-outline</v-icon>
      </v-btn>
    </div>
  </template>
  
  <script setup lang="ts">

  import { CategoriaProdutoDto } from '@/Model/Produtos/CategoriaProdutoDto';
  
  const props = defineProps({
  categoriaProduto: {
    type: Object as () => CategoriaProdutoDto,
    required: true,
    default: () => ({ descricao: '' })  // Valor padrão caso não seja passado
  }
});
  
  const emit = defineEmits(['categoriaAlterada']);
  
  const dialogo = ref(false);
  
  // Stores
  const storeCP = storeCategoriaProdutos();
  const { editarCategoriaProdutos } = storeCP;
  const { ativarLoad, desativarLoad } = storeGlobal();
  
  const processarEdicao = async (categoriaProduto: CategoriaProdutoDto) => {
    ativarLoad();
    try {
      await editarCategoriaProdutos(categoriaProduto);
      emit('categoriaAlterada', categoriaProduto);
      dialogo.value = false;
    } catch (error) {
      alert('Algo deu errado nesta operação');
    } finally {
      desativarLoad();
    }
  };
  </script>
  