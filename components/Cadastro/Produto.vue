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
                <v-text-field label="Nome do produto*" v-model="produto.nome" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select v-model="select" :items="descricaoCategorias" label="Selecione a Categoria do produto*"
                  required  
                  placeholder="Digite ou selecione uma categoria"></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Descrição da Categoria*" v-model="select" required></v-text-field>
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
import ProdutoDto from '@/Model/Produtos/ProdutoDto';
import { CategoriaProdutoDto } from '~/Model/Produtos/CategoriaProdutoDto';
import CategoriaProdutoService from '~/Service/Produtos/CategoriaProdutoService';
import ProdutoService from '~/Service/Produtos/ProdutoService';
import { storeCategoriaProdutos } from '~/store/CategoriaPrduto';
import { storeGlobal } from '~/store/Global';
import { storeProdutos } from '~/store/Produto';

const { desativarLoad, ativarLoad } = storeGlobal();
const categoriasStore = storeCategoriaProdutos();
ativarLoad();
const serviceCategoriasProduto = new CategoriaProdutoService();
const categoriasProduto = await serviceCategoriasProduto.obterTodasCategoriasProduto();
categoriasStore.adicionarcategoriaProdutos(categoriasProduto);
desativarLoad();

const { adicionarProdutos } = storeProdutos();
const {categoriaProdutos} =  storeToRefs(categoriasStore);


const produto = ref(new ProdutoDto());
const select = ref('');
const dialogproduto = ref(false);
let idSelect: number | undefined = undefined;

// Funções e métodos
const descricaoCategorias = computed(() => categoriaProdutos.value.map(c => c.descricao) || []);

function selecionaIdSelect() {
  idSelect = categoriaProdutos.value.find(x => x.descricao == select.value)?.id;
}

async function salvarproduto() {
  ativarLoad();

  if (idSelect) {
    produto.value.categoriaProdutoId = idSelect;
  }
  else{
    var cat = new CategoriaProdutoDto()
    
      cat.descricao = select.value
    
    produto.value.categoriaProduto = cat;
    console.log(produto);
  }

  try {
    const service = new ProdutoService();
    const dados = await service.salvarProduto(produto.value);
    adicionarProdutos(dados);
    dialogproduto.value = false;
  } catch (error) {
    alert("Algo deu errado nesta operação");
  } finally {
    desativarLoad();
  }
}
</script>