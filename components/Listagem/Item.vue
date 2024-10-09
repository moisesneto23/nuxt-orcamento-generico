<template>
    <v-expansion-panels focusable>
      <v-expansion-panel
        v-for="(item, i) in obterItensUnitarios"
        :key="i"
        class="mb-2"
      >
        <v-expansion-panel-header class="my-n1">
          <v-row>
            <v-col class="mt-1">
              <h3>{{ item.nome }}</h3>
            </v-col>
            <v-col>
              <h4>
                Medida de unidade:
                <h5>{{ item.nomeUnidadeMedida }}</h5>
              </h4>
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col cols="6" class="mt-2" style="color: #8E24AA;">
              <edicao-item :itemEdicao="item"></edicao-item>
              <h3 class="text-center">Editar</h3>
            </v-col>
            <v-col cols="6">
              <v-btn color="error" >
                <v-icon x-large @click="excluirItem(item.id)">mdi-trash-can-outline</v-icon>
              </v-btn>
              <h3 class="text-center">Excluir</h3>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </template>
  <script setup lang="ts">
  import { computed } from 'vue';
  //import { useStore } from 'vuex';
  //import EdicaoItem from '@/components/Itens/Item/EdicaoItem.vue'; 
  import ItemDto from '@/Model/Itens/ItemDto';
 // import { StoreNamespaces } from '@/store';
  //import { ItensActionTypes } from '@/store/Item/actions';
  
  // Acessando a store do Vuex
  //const store = useStore();
  
  // Função para remover item
  const removerItem = (id: number) => {
    //store.dispatch(StoreNamespaces.ITEM + '/' + ItensActionTypes.REMOVER_ITEM, id);
  };
  
  // Computed para obter os itens
  const obterItensUnitarios = 
    //return store.state[StoreNamespaces.ITEM].itens;
    [
        {
            id : 0,
            nome: 'hsdfj',
            valorVenda: 45,
            valorCompra: 45,
             empresa: null,
   empresaId: 4,
    tipoUnidadeMedidaId: 4,
     nomeUnidadeMedida: 'string',
    QuantidadeMinimaPorTipoUnidade: 4
        }
    ]
  ;
  
  // Função para excluir item
  const excluirItem = async (id: number) => {
    await removerItem(id);
  };
  </script>
  