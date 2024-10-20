<template>
    <v-expansion-panels focusable>
      <v-expansion-panel v-for="(item, i) in itensProdutoDimencao" :key="i" class="mb-1">
        <v-expansion-panel-title color="#C8E6C9">
          <v-row class="my-n5">
            <v-col>
              <h3 class="mt-2"> {{ item.nome }}</h3>
            </v-col>
            <v-col>
              <h4>Orientação de cálculo:<h5 class="mt-1"> {{ obterNomeDimencao(item.dimencaoId) }} </h5></h4>
            </v-col>
            <v-col>
              <h4>Medida de unidade:<h5 class="mt-1"> {{ item.nomeUnidadeMedida }} </h5></h4>
            </v-col>
          </v-row>
        </v-expansion-panel-title>
        
        <v-expansion-panel-text color="#E8F5E9">
          <!-- Condição para cálculo linear -->
          <div class="item-linear" v-if="item.dimencaoId > 1 && item.dimencaoId < 5">
            <v-row>
              <v-col cols="12" sm="6">
                <v-select 
                  color="teal" 
                  v-model="select" 
                  :items="direcoesCauculoLinear" 
                  item-text="descricao" 
                  item-value="id"
                  label="Direção de cálculo" 
                  persistent-hint 
                  return-object 
                  single-line
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4" sm="4" md="4">
                <v-text-field 
                  color="teal" 
                  type="number" 
                  v-model="item.somatorioLargura" 
                  label="Somatório Largura"
                  v-if="obterIdDirecaoCauculo === 2"
                ></v-text-field>
                <v-text-field 
                  color="teal" 
                  type="number" 
                  v-model="item.somatorioAltura" 
                  label="Somatório Altura"
                  v-else-if="obterIdDirecaoCauculo === 3"
                ></v-text-field>
                <v-text-field 
                  color="teal" 
                  type="number" 
                  v-model="item.somatorioComprimento" 
                  label="Somatório Comprimento"
                  v-else-if="obterIdDirecaoCauculo === 4"
                ></v-text-field>
              </v-col>
            </v-row>
          </div>
  
          <!-- Condição para cálculo de perímetro -->
          <div class="item-perimetro" v-if="item.dimencaoId > 4 && item.dimencaoId < 8">
            <v-row>
              <v-col cols="12" sm="6">
                <v-select 
                  color="teal" 
                  v-model="select" 
                  :items="direcoesCauculoPerimetro" 
                  item-text="descricao" 
                  item-value="id"
                  label="Direção de cálculo" 
                  persistent-hint 
                  return-object 
                  single-line
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <!-- Somatórios e Coeficientes de cálculo -->
              <v-col cols="4" sm="4" md="4">
                <v-text-field 
                  color="teal" 
                  type="number" 
                  v-model="item.somatorioLargura" 
                  label="Somatório Largura"
                  v-if="obterIdDirecaoCauculo === 5 || obterIdDirecaoCauculo === 7"
                ></v-text-field>
                <v-text-field 
                  color="teal" 
                  type="number" 
                  v-model="item.somatorioAltura" 
                  label="Somatório Altura"
                  v-if="obterIdDirecaoCauculo === 5 || obterIdDirecaoCauculo === 6"
                ></v-text-field>
                <v-text-field 
                  color="teal" 
                  type="number" 
                  v-model="item.somatorioComprimento" 
                  label="Somatório Comprimento"
                  v-if="obterIdDirecaoCauculo === 6 || obterIdDirecaoCauculo === 7"
                ></v-text-field>
              </v-col>
              <v-col cols="4" sm="4" md="4">
                <v-text-field 
                  color="teal" 
                  type="number" 
                  v-model="item.coeficienteLargura" 
                  label="Coeficiente Largura"
                  v-if="obterIdDirecaoCauculo === 5 || obterIdDirecaoCauculo === 7"
                ></v-text-field>
                <v-text-field 
                  color="teal" 
                  type="number" 
                  v-model="item.coeficienteAltura" 
                  label="Coeficiente Altura"
                  v-if="obterIdDirecaoCauculo === 5 || obterIdDirecaoCauculo === 6"
                ></v-text-field>
                <v-text-field 
                  color="teal" 
                  type="number" 
                  v-model="item.coeficienteComprimento" 
                  label="Coeficiente Comprimento"
                  v-if="obterIdDirecaoCauculo === 6 || obterIdDirecaoCauculo === 7"
                ></v-text-field>
              </v-col>
            </v-row>
          </div>
  
          <!-- Condição para cálculo de área -->
          <div class="item-area" v-if="item.dimencaoId > 7 && item.dimencaoId < 11">
            <v-row>
              <v-col cols="12" sm="6">
                <v-select 
                  color="teal" 
                  v-model="select" 
                  :items="direcoesCauculoArea" 
                  item-text="descricao" 
                  item-value="id"
                  label="Direção de cálculo" 
                  persistent-hint 
                  return-object 
                  single-line
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <!-- Somatórios e Coeficientes de cálculo -->
              <v-col cols="4" sm="4" md="4">
                <v-text-field 
                  color="teal" 
                  type="number" 
                  v-model="item.somatorioLargura" 
                  label="Somatório Largura"
                  v-if="obterIdDirecaoCauculo === 8 || obterIdDirecaoCauculo === 10"
                ></v-text-field>
                <v-text-field 
                  color="teal" 
                  type="number" 
                  v-model="item.somatorioAltura" 
                  label="Somatório Altura"
                  v-if="obterIdDirecaoCauculo === 8 || obterIdDirecaoCauculo === 9"
                ></v-text-field>
                <v-text-field 
                  color="teal" 
                  type="number" 
                  v-model="item.somatorioComprimento" 
                  label="Somatório Comprimento"
                  v-if="obterIdDirecaoCauculo === 9 || obterIdDirecaoCauculo === 10"
                ></v-text-field>
              </v-col>
              <v-col cols="4" sm="4" md="4">
                <v-text-field 
                  color="teal" 
                  type="number" 
                  v-model="item.coeficienteLargura" 
                  label="Coeficiente Largura"
                  v-if="obterIdDirecaoCauculo === 8 || obterIdDirecaoCauculo === 10"
                ></v-text-field>
                <v-text-field 
                  color="teal" 
                  type="number" 
                  v-model="item.coeficienteAltura" 
                  label="Coeficiente Altura"
                  v-if="obterIdDirecaoCauculo === 8 || obterIdDirecaoCauculo === 9"
                ></v-text-field>
                <v-text-field 
                  color="teal" 
                  type="number" 
                  v-model="item.coeficienteComprimento" 
                  label="Coeficiente Comprimento"
                  v-if="obterIdDirecaoCauculo === 9 || obterIdDirecaoCauculo === 10"
                ></v-text-field>
              </v-col>
            </v-row>
          </div>
  
          <v-row>
            <v-col cols="4" sm="4" md="4">
              <v-text-field 
                type="number" 
                v-model="item.quantidade" 
                label="Quantidade de itens*" 
                color="teal" 
                required
              ></v-text-field>
            </v-col>
            <v-col cols="4" sm="6" md="4">
              <v-text-field 
                type="number" 
                v-model="item.valorAdicional" 
                label="Valor adicional" 
                step="0.01" 
                locale="pt-BR" 
                color="teal"
                prefix="R$" 
                required
              ></v-text-field>
            </v-col>
            
   
          <v-col>
            <v-btn color="primary" class="mt-5" @click="editarItemProduto(item)"
              :disabled="!item.quantidade || item.quantidade < 1">
              Editar
            </v-btn>
            <v-col>
              <v-btn text @click="excluirItemProduto(item.id)"><v-icon>mdi-trash-can-outline</v-icon> </v-btn>
              <h3 class="text-center">Excluir</h3>
            </v-col>
          </v-col>

          </v-row>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import DimencaoService from '~/Service/Itens/DimencaoService';
  import ItemProdutoDimencaoService from '~/Service/Produtos/ItemProdutoDimencaoService';

  const dimencoesService = new DimencaoService();
  const itemProdutoService = new ItemProdutoDimencaoService();
  const dimencoes = await dimencoesService.obterDimencoes();
  // Props simuladas, deve-se passar via API
  const itensProdutoStore = storeProdutos();
  const {itensProdutoDimencao} = storeToRefs(itensProdutoStore);
  
  const direcoesCauculoLinear = ref(dimencoes.filter(x=>x.nome == 'Linear'));
  const direcoesCauculoPerimetro = ref(dimencoes.filter(x=>x.nome == 'Perimetro'));
  const direcoesCauculoArea = ref(dimencoes.filter(x=>x.nome == 'Area'));
  
  const select = ref(null);
  
  const obterNomeDimencao = (dimencaoId) => {
    const dimencao = dimencoes.find(x => x.id === dimencaoId);
    return dimencao?.nome + ' ' + dimencao?.descricao;
  };
  
  const obterIdDirecaoCauculo = computed(() => select.value ? select.value.id : null);

  const { desativarLoad, ativarLoad } = storeGlobal();

  const {removerItemProdutoDimencao, editarItemProdutoDimencao } = storeProdutos();

  const editarItemProduto = async (itemProduto) => {
    ativarLoad();
    editarItemProdutoDimencao(itemProduto);
      desativarLoad();
  }


  const excluirItemProduto = async (id) => {
    ativarLoad();
    await removerItemProdutoDimencao(id);
      desativarLoad();
  
      desativarLoad();
  }

  </script>
  
  <style scoped>
  .my-n5 {
    margin-top: -5px;
  }
  </style>
  