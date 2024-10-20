<template>
    <div>
      <v-expansion-panels focusable>
        <v-expansion-panel
          v-for="(item, i) in obterItensUnirarioNaoSelecionado"
          :key="i"
          class="mb-1"
        >
          <v-expansion-panel-title class="my-n2">
            <v-row>
              <v-col class="mt-1">
                <h3>{{ item.nome }}</h3>
              </v-col>
              <v-col>
                <h4>
                  Medida de unidade:<h5>{{ item.nomeUnidadeMedida }}</h5>
                </h4>
              </v-col>
            </v-row>
          </v-expansion-panel-title>
          <v-expansion-panel-text class="mt-4">
            <v-row>
              <v-col cols="6" sm="4" md="4">
                <v-text-field
                  type="number"
                  v-model="quantidade"
                  label="Quantidade de itens*"
                  required
                ></v-text-field>
              </v-col>
  
              <v-col cols="6" sm="6" md="4">
                <v-text-field
                  label="Valor adicional"
                  type="number"
                  v-model="valorAdicional"
                  step="0.01"
                  locale="pt-BR"
                  prefix="R$"
                  required
                ></v-text-field>
              </v-col>
              <v-col>
                <v-btn
                  color="primary"
                  class="mt-5"
                  @click="selecionaItem(item)"
                  :disabled="!quantidade || quantidade < 1"
                >
                  <v-icon dark>mdi-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
import type ItemDto from '~/Model/Itens/ItemDto';
import ItemProdutoDimencaoDto from '~/Model/Produtos/ItemProdutoDimencaoDto';
import ItemProdutoDimencaoService from '~/Service/Produtos/ItemProdutoDimencaoService';
  
const {ativarLoad, desativarLoad} = storeGlobal()
  const props = defineProps({
    produtoId: {
      type: Number,
      required: true,
    },
  });
  
  const quantidade = ref(1);
  const valorAdicional = ref(0);
  const itemProduto = ref(new ItemProdutoDimencaoDto());
  
  const produtoStore = storeProdutos();
  const itemStore = storeItens();
  const {itensProdutoDimencao} = storeToRefs(produtoStore);
  const {itens} = storeToRefs(itemStore);
  const obterItensUnirarioNaoSelecionado = computed(() => {
    let itensSelecionaveis = itens.value;

    const itensSelecionados = itensProdutoDimencao.value.filter(
      (x) => x.dimencaoId === 1
    );
    itensSelecionados.forEach((item) => {
      itensSelecionaveis = itensSelecionaveis.filter((x) => x.id !== item.itemId);
    });
    return itensSelecionaveis;
  });
  
  const selecionaItem = async (item: ItemDto) => {
    itemProduto.value.produtoId = props.produtoId;
    itemProduto.value.itemId = item.id;
    itemProduto.value.dimencaoId = 1;
    itemProduto.value.valorCompra = item.valorCompra;
    itemProduto.value.valorVenda = item.valorVenda;
    itemProduto.value.nome = item.nome;
    itemProduto.value.valorAdicional = valorAdicional.value;
    itemProduto.value.quantidade = quantidade.value;
    itemProduto.value.valorTotal = 0;
    ativarLoad();
    try {
        const serviceItemProduto = new ItemProdutoDimencaoService()
      const dados = await serviceItemProduto.salvarItemProduto(itemProduto.value);
      produtoStore.adicionarItensProdutoDimencao(dados);
    } catch (error) {
      alert('Algo deu errado nesta operação');
    } finally {
      desativarLoad();
    }
  };
  </script>
  