<template>
  <nav>
      <div  class="mx-4 my-4">
        <router-link :to="loginRoute">
          <v-btn color="purple" >
            <h2>Login</h2>
          </v-btn>
        </router-link>
      </div>
      <div class="mx-4 my-2">
        <router-link :to="cadastroEmpresaRoute">
          <v-btn color="purple" >
            <h2>Cadastro Empresa</h2>
          </v-btn>
        </router-link>
      </div>
    <!--
    <span>
      <v-btn text>
        <router-link :to="sobreRoute">
          <v-btn color="purple" text>
            <b>Sobre</b>
          </v-btn>
        </router-link>
      </v-btn>
    </span>
    -->
  </nav>
</template>

<script setup lang="ts">
//import Rotas from '@/router/Rotas'

const loginRoute = Rotas.Visitante.Login
const cadastroEmpresaRoute = Rotas.Visitante.CadastroEmpresa
const sobreRoute = Rotas.Visitante.Sobre // Caso queira habilitar no futuro
</script>

<style scoped>
/* Adicione estilos adicionais se necessário */
</style>
