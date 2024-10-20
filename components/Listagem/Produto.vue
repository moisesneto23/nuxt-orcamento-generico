<template>
  <v-expansion-panels v-if="dialog">
    <v-expansion-panel v-for="produto in produtos" :key="produto.id" class="mb-2">
      <v-expansion-panel-title>
        <h3>{{ produto.nome }}</h3>
        <v-divider vertical class="mx-2"></v-divider>
        <h4>Categoria Produto: <h5>{{ produto.categoriaProduto.descricao }}</h5></h4>
      </v-expansion-panel-title>
      <v-expansion-panel-text class="mt-10">
        <v-card-title>
          <span class="text-h5">Adicionar, editar ou excluir Itens ao Produto</span>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success"  class="mx-4" @click="adicionarItens(produto.id)">
            Adicionar itens
          </v-btn>
          <v-btn color="grey" @click="dialog = false">
            <b>Cancelar</b> 
          </v-btn>
        </v-card-actions>
        <!-- <dialogo-item-produto :produtoId="produto.id" @produto-adicao-concluido="" /> -->
         
        <hr />
        <v-row>
          <v-col cols="6">
            <edicao-produto :produto="produto" />
            <h3>Editar</h3>
          </v-col>
          <v-col cols="6">
            <v-btn @click="excluirProduto(produto.id)">
              <v-icon>mdi-trash-can-outline</v-icon>
            </v-btn>
            <h3 class="text-center">Excluir</h3>
          </v-col>
        </v-row>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>

  <v-dialog v-model="dialog" persistent max-width="600px" v-else>
    <div>ok</div>
  </v-dialog>
</template>

<script setup lang="ts">

const {ativarLoad, desativarLoad} = storeGlobal();
const produtoStore = storeProdutos();
const {produtos} = storeToRefs(produtoStore);

const dialog = ref(true)
const adicionarItens = (id: number) => {
  const rota = Rotas.Gestao.Produtos+`/${id}`;
  navigateTo(rota);
} 
const excluirProduto = async (id: number) => {
  ativarLoad()
  try {
    produtoStore.removerProduto(id);
  } catch (error) {
    alert('Algo deu errado nesta operação')
  } finally {
    desativarLoad()
  }
}

</script>

<style scoped>
.mb-2 {
  margin-bottom: 16px;
}
.mx-2 {
  margin-left: 8px;
  margin-right: 8px;
}
.mt-10 {
  margin-top: 40px;
}
.text-center {
  text-align: center;
}
</style>
