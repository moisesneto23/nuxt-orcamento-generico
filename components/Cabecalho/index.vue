<template>
    <div>
      <v-app-bar color="primary" dark width="100%">
        <v-app-bar-nav-icon x-large @click.stop="toggleDrawer"></v-app-bar-nav-icon>
  
        <div class="d-flex align-center">
        <v-row class="align=center justify=center fill-height">
            <v-btn class="ml-8" @click="reloadPage()" >
              <v-col>
                {{ nomePagina }}
              </v-col>
            </v-btn>
          </v-row>
        </div>
        <v-spacer></v-spacer>
        <v-btn @click="sair" color="#B71C1C">Sair</v-btn>
      </v-app-bar>
  
      <v-navigation-drawer
        v-model="drawer"
        absolute
        left
        temporary
        class="navigation"
        style="padding-top: 60px;"
      >
        <v-list>
          <v-list-item-group v-model="group">
            <v-list-item :to="Inicio">
              <v-list-item-icon>
                <v-icon color="primary">mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="text-primary">Início</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
  
            <v-list-item :to="RealizaOrcamento">
              <v-list-item-icon>
                <v-icon color="primary">mdi-calculator</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="text-primary">Orçamento</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
  
            <v-list-item :to="Pedidos">
              <v-list-item-icon>
                <v-icon color="primary">mdi-shape-plus</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="text-primary">Pedidos</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
  
            <v-list-item :to="cadastroProdutos">
              <v-list-item-icon>
                <v-icon color="primary">mdi-shape-plus</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="text-primary">Cadastro Produtos</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
  
            <v-list-item :to="cadastroItens">
              <v-list-item-icon>
                <v-icon color="primary">mdi-shape-plus</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="text-primary">Cadastro Itens</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
  
            <v-list-item :to="Ajuda">
              <v-list-item-icon>
                <v-icon color="primary">mdi-help</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="text-primary">Ajuda</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  
  const drawer = ref(false);
  const group = ref(null);
  const router = useRouter();
  
  //const empresaService = useInjection(EmpresaService);
  const cadastroItens = Rotas.Cadastros.CadastroItens;
  const cadastroProdutos = Rotas.Cadastros.CadastroProdutos;
  const Inicio = Rotas.Inicio;
  const Ajuda = Rotas.Ajuda;
  const RealizaOrcamento = Rotas.Cadastros.RealizaOrcamento;
  const Pedidos = Rotas.Cadastros.Pedidos;
  
  const nomePagina = computed(() => router.currentRoute.value.name);
  
  const sair = () => {
    storeInformacoesEmpresa().limparInformacoesEmpresa();
    //router.push(Rotas.Visitante.Login);
  };
  
  const reloadPage = () => {
    location.reload();
  };
  
  const toggleDrawer = () => {
    drawer.value = !drawer.value;
  };
  </script>
  
  <style scoped>
  /* Estilos específicos podem ser adicionados aqui */
  </style>
  