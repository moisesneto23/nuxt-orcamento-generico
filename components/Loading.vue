<template>
    <v-dialog
      v-model="loadCarregamento"
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
</template>

<script setup lang="ts">
const globalStore = storeGlobal();
const {loadCarregamento} = storeToRefs(globalStore)
</script>