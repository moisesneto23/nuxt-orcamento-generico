<template>
    <v-expansion-panels focusable >
      <v-expansion-panel 
        v-for="item in itens" 
        :key="item.id"
        class="mb-2"
      >
        <v-expansion-panel-title class="my-n1">
          <v-row>
            <v-col class="mt-1">
              <h3>{{ item.nome }}</h3>
            </v-col>
            <v-col>
              <div>
                Medida de unidade:
                <h5>{{ item.nomeUnidadeMedida }}</h5>
              </div>
            </v-col>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-row>
            <v-col cols="6" class="mt-2" style="color: #8E24AA;">
              <edicao-item :itemEdicao="item"></edicao-item>
              <h3 class="text-center">Editar</h3>
            </v-col>
            <v-col cols="6">
              <v-btn color="error" @click="excluirItem(item.id)">
                <v-icon x-large >mdi-trash-can-outline</v-icon>
              </v-btn>
              <h3 class="text-center">Excluir</h3>
            </v-col>
          </v-row>
          
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </template>
  <script setup lang="ts">
import ItemService from '~/Service/Itens/ItemService';

 const httpSSr = new ItemService();
 const itensSSr = await httpSSr.obterTodosItenSSr();
 const store = storeItens()
 store.adicionarItens(itensSSr);

  const itemStore = storeItens();
  const { itens } = storeToRefs(itemStore);


  const excluirItem = async (id: number) => {
      itemStore.removerItem(id);
  };
  
  </script>
  