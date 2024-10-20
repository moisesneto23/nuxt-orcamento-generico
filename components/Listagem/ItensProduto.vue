<template>
    <div id="cadastroOrcamento">
      <v-tabs v-model="tab" grow icons-and-text background-color="#CE93D8" color="#311B92">
        <v-tab value="tab-1">
          Unidade
          <v-icon>mdi-checkbox-blank-circle</v-icon>
        </v-tab>
  
        <v-tab value="tab-2">
          Linear
          <v-icon>mdi-arrow-right-thin</v-icon>
        </v-tab>
  
        <v-tab value="tab-3">
          Perímetro
          <v-icon>mdi-network-strength-outline</v-icon>
        </v-tab>
  
        <v-tab value="tab-4">
          Área
          <v-icon>mdi-square-outline</v-icon>
        </v-tab>
  
        <v-tab value="tab-5">
          Volume
          <v-icon>mdi-package-variant-closed</v-icon>
        </v-tab>
      </v-tabs>
  
      <v-tabs-window v-model="tab" data-app style="background-color: #f2f2f2;">
        <v-tabs-window-item value="tab-1">
          <v-card-text>
            <ItensUnidadeSelecao 
              :itensNaoAdicionados="itensNaoAdicionados"
              :produtoId="produtoId"
              @fechar-dialogo="fechaDialogo" />
          </v-card-text>
        </v-tabs-window-item>
  
        <v-tabs-window-item value="tab-2">
          <v-card-text>
            <ItensLinearSelecao 
              :itensNaoAdicionados="itensNaoAdicionados"
              :produtoId="produtoId" />
          </v-card-text>
        </v-tabs-window-item>
  
        <v-tabs-window-item value="tab-3">
          <v-card-text>
            <ItensPerimetroSelecao 
              :itensNaoAdicionados="itensNaoAdicionados"
              :produtoId="produtoId" />
          </v-card-text>
        </v-tabs-window-item>
  
        <v-tabs-window-item value="tab-4">
          <v-card-text>
            <ItensAreaSelecao 
              :itensNaoAdicionados="itensNaoAdicionados"
              :produtoId="produtoId" />
          </v-card-text>
        </v-tabs-window-item>
  
        <v-tabs-window-item value="tab-5">
          <v-card-text>
            <ItensVolumeSelecao 
              :itensNaoAdicionados="itensNaoAdicionados"
              :produtoId="produtoId" />
          </v-card-text>
        </v-tabs-window-item>
      </v-tabs-window>
  
      <!-- <v-card>
        <p>Itens selecionados</p>
        <ListagemItemProdutoEdicao :produtoId="produtoId" />
      </v-card> -->
    </div>
  </template>
  
  <script setup lang="ts">
import ItemService from '~/Service/Itens/ItemService';

 

  const tab = ref('tab-1');
  const produtoId = ref(1); // Exemplo estático, substitua com o valor dinâmico se necessário
  
  // Computed properties para carregar os itens não adicionados
  const itensNaoAdicionados = computed(() => {
    return [];//store.itensNaoAdicionados(produtoId.value);
  });
  
  // Método para fechar o diálogo
  const fechaDialogo = () => {
    // Emitir evento ou realizar outra ação
  };
  </script>
  
  <style scoped>
  #cadastroOrcamento {
    background-color: rgb(186, 186, 186);
  }
  </style>
  