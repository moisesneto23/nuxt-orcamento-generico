<template>
  <v-app id="app">
    <header>
      <Cabecalho v-if="presisaDeToken"></Cabecalho>
      <CabecalhoVisitante v-else ></CabecalhoVisitante>
    </header>
    <main>
      <NuxtPage />
    </main>
  </v-app>
</template>

<script setup lang="ts">
 const route = useRoute();

 const presisaDeToken = computed(() => {
  switch (route.path) {
    case Rotas.Visitante.Login:
      return false;
    case Rotas.Visitante.CadastroEmpresa:
      return false;
    case Rotas.Visitante.RecuperarSenha:
      return false;
    default: return true;
      break;
  }
});

  // Scripts específicos do layout podem ser adicionados aqui, se necessário.
</script>

<style scoped>
main {
  padding-top: 56px; /* Ajustar conforme a altura do seu v-app-bar */
}

#app {
  background: #F2F2F2;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  font-size: 12px;
  padding: auto;
}
</style>