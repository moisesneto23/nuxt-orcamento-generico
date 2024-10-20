<template>
    <div class="d-flex justify-center">
      <v-dialog v-model="dialog" persistent max-width="1000px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Adicionar, editar ou excluir Itens ao Produto</span>
          </v-card-title>
          <!-- <ListagemItensProduto></ListagemItensProduto> -->
          <listagem-itens-produto :produtoId="'5'" @fecha-dialogo="dialog = false"></listagem-itens-produto>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" class="mx-4" @click="adicionarItens">
              Adicionar itens
            </v-btn>
            <v-btn color="grey" @click="dialog = false">
              <b>Cancelar</b> 
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-btn @click="dialog = true" color="primary" class="mb-4">
        <v-icon>mdi-format-list-group-plus</v-icon>
        <b>Adicionar Itens ao produto</b>S
      </v-btn>

      <div>
        <v-card>
        <p>Itens selecionados</p>
        <ListagemItemProdutoEdicao/>
      </v-card>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
import ItemProdutoDimencaoDto from '~/Model/Produtos/ItemProdutoDimencaoDto';
import ItemService from '~/Service/Itens/ItemService';
import ItemProdutoDimencaoService from '~/Service/Produtos/ItemProdutoDimencaoService';

definePageMeta({
  middleware: 'auth'
});

const routep = () => {
  const idrota = useRoute().params.id;
  return Number.parseInt(Array.isArray(idrota) ? idrota[0] : idrota) || 0;
};
const itemProdutoService = new ItemProdutoDimencaoService();
const httpSSr = new ItemService();
 const itensSSr = await httpSSr.obterTodosItenSSr();
 const dadosItensProduto = await itemProdutoService.obterItensCadastradoPorProduto(routep());
 const itemStore = storeItens();
 const produtoStore = storeProdutos();
 itemStore.adicionarItens(itensSSr);
 produtoStore.adicionarItensProdutoDimencao(dadosItensProduto);







  
  

  // Emit
  const emit = defineEmits(['produto-adicao-concluido'])
  
  // Stores
  const globalStore = storeGlobal()
  //const itemStore = useItemStore()
  
  // Local state
  const dialog = ref(false)
  const itensSelecionados = ref([])
  
  // Methods
  const adicionarItens = () => {
    return itensSelecionados.value
  }
  
  const salvarItensProduto = () => {
    emit('produto-adicao-concluido')
  }
  
  // Lifecycle hook
  onMounted(async () => {
    globalStore.ativarLoad()
    try {
     // await itemStore.obterTodosItens()
    } catch (error) {
      console.error('Erro ao obter itens:', error)
    } finally {
      globalStore.desativarLoad()
    }
  })
  </script>
  
  <style scoped>
  .fullscreen-dialog {
    position: fixed !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>
  