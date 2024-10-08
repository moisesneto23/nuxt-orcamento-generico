<template>
    <div>
      <v-dialog
        v-model="true"
        persistent
        max-width="290"
      >
        <v-card loading min-height="198">
          <v-card-text class="mt-16">
            <v-progress-circular
              :size="70"
              :width="7"
              color="purple"
              indeterminate
            ></v-progress-circular>
          </v-card-text>
        </v-card>
      </v-dialog>
  
      <CabecalhoVisitante />
      <router-view />
    </div>
  </template>
  
  <script setup lang="ts">
//   import CabecalhoVisitante from '@/views/visitante/CabecalhoVisitante.vue'
//   import { computed } from 'vue'
//   import { useStore } from 'vuex'
  
  // Acessa o estado da store Vuex
//   const store = useStore()
//   const carregamento = computed(() => store.state.carregamento)
  </script>
  