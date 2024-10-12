<template>
    <div justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Editar Item</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Nome da categoria*"
                    required
                    v-model="itemEdicao.nome"
                  ></v-text-field>
                </v-col>
  
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Valor de compra"
                    hint="custo de compra do item"
                    v-model="itemEdicao.valorCompra"
                    type="number"
                  ></v-text-field>
                </v-col>
  
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Valor de venda"
                    hint="pretenção de venda do item"
                    v-model="itemEdicao.valorVenda"
                    type="number"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indica campo obrigatorio</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#0288D1" @click="editarItem(itemEdicao)" class="mx-8">
              Salvar Edição
            </v-btn>
            <v-btn color="grey" @click="dialog = false">
              <b>Cancelar</b>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-btn color="#8E24AA" @click="dialog = true">
        <v-icon x-large>mdi-circle-edit-outline</v-icon>
      </v-btn>
    </div>
  </template>
  
  <script setup lang="ts">
import type ItemDto from '~/Model/Itens/ItemDto';

const itemStore = storeItens();

  
  const props = defineProps<{
    itemEdicao: ItemDto; // Propriedade do item a ser editado
  }>();
  
  const dialog = ref(false); // Controlando o estado do diálogo

  const editarItem = async (item: ItemDto): Promise<void> => {
    try {
        itemStore.editarItem(props.itemEdicao);
      dialog.value = false; // Fechando o diálogo
    } catch (error) {
      alert('Algo deu errado nesta operação');
    }
  };
  </script>
  
  <style scoped>
  /* Adicione estilos específicos se necessário */
  </style>
  