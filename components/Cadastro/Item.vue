<template>
    <div justify="center" id="cadastroItem">
      <v-dialog v-model="dialogItem" persistent max-width="800px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Criar Item</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Nome do Item*" v-model="item.nome" required color="teal" outlined></v-text-field>
                </v-col>
  
                <v-col cols="12" sm="6" md="4">
                  <v-select @change="verificaId()" v-model="selectUnidadeMedida" :items="tipoUnidadeMedida" item-title="nome" item-value="id"
                    label="Unidade de medida" persistent-hint return-object outlined></v-select>
                </v-col>
  
                <v-col cols="12" sm="6" md="4" v-if="obtemIdUnidadeMedida > 5">
                  <v-text-field label="Quantidade minima" hint="minimo em m2 ou linear disponivel no mercado" v-model="valorVendaStr"
                    color="teal" type="number" :rules="valorRules" outlined></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field variant="outlined" label="Valor de compra" hint="custo de compra do item"
                    :rules="valorRules" v-model="valorCompraStr" color="teal" type="number" prefix="R$"
                    outlined></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indica campo obrigatório</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" @click="salvarItem">
              Salvar
            </v-btn>
            <v-btn color="grey" @click="dialogItem = false">
              <b>Cancelar</b>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  
      <v-btn @click="dialogItem = true" color="purple" :rounded="true">
        <v-icon>mdi-shape-square-plus</v-icon>
        Criar Item
      </v-btn>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted } from 'vue';

  import ItemDto from '@/Model/Itens/ItemDto';
  import type { TipoUnidadeMedidaDto } from '~/Model/Itens/TipoUnidadeMedidaDto';
import ItemService from '~/Service/Itens/ItemService';
  

  const {  adicionarItens} = storeItens();

  // State & actions do Vuex
  //const store = useStore();
//   const tipos = computed(() => store.state.tipos);
//   const salvarItemAction = (item: ItemDto) => store.dispatch(ItensActionTypes.SALVAR_ITEM, item);
//   const ativarCarregamento = () => store.dispatch(GlobalActionTypes.ATIVAR_CARREGAMENTO);
//   const desativarCarregamento = () => store.dispatch(GlobalActionTypes.DESATIVAR_CARREGAMENTO);
  
  // Data
  const dialogItem = ref(false);
  const item = ref(new ItemDto());
  const comprimentoBarraStr = ref('1');
  const valorVendaStr = ref('0');
  const valorCompraStr = ref('');
  const idSelect = ref<number | undefined>(undefined);
  const select = ref('');
  
  const tipoUnidadeMedida = ref<TipoUnidadeMedidaDto[]>( [
      { id: 1, nome: 'Unidade' },
      { id: 2, nome: 'Peso/kg' },
      { id: 3, nome: 'Metro' },
      { id: 4, nome: 'Área/m2' },
      { id: 5, nome: 'Volume/m3' },
      { id: 6, nome: 'Chapa em m2' },
      { id: 7, nome: 'Barra em metros' },
      { id: 8, nome: 'Hora' },
    ]);
  const selectUnidadeMedida = ref(<TipoUnidadeMedidaDto>{});
  
  // Funções
  const salvarItem = async () => {
    item.value.tipoUnidadeMedidaId = selectUnidadeMedida.value.id;
    item.value.valorCompra = parseFloat(valorCompraStr.value);
    item.value.QuantidadeMinimaPorTipoUnidade = parseFloat(valorVendaStr.value);
  
    try {
      const service = new ItemService();
      const dados = await service.salvarItem(item.value);
      adicionarItens(dados);
      dialogItem.value = false;
    } catch (error) {
      alert("Algo deu errado nesta operação");
    }
  };
  
  const verificaId = () => {
    if (tipoUnidadeMedida.value.length) {
      unidadeMedidaId.value = selectUnidadeMedida.value.id;
    }
  };
  
  const unidadeMedidaId = ref(0);
  const obtemIdUnidadeMedida = computed(() => unidadeMedidaId.value);
  
  // Regras de validação
  const valorRules = [
    (v: string) => !!v || 'Valor é obrigatório',
    (v: string) => /^\d+(\.\d{1,2})?$/.test(v) || 'Valor inválido',
  ];
  
  // Montagem inicial
  onMounted(() => {
    tipoUnidadeMedida.value = [
      { id: 1, nome: 'Unidade' },
      { id: 2, nome: 'Peso/kg' },
      { id: 3, nome: 'Metro' },
      { id: 4, nome: 'Área/m2' },
      { id: 5, nome: 'Volume/m3' },
      { id: 6, nome: 'Chapa em m2' },
      { id: 7, nome: 'Barra em metros' },
      { id: 8, nome: 'Hora' },
    ];
  });
  </script>
  
  <style scoped>
  #cadastroItemDimencao {
    background-color: rgb(241, 241, 241);
  }
  </style>
  