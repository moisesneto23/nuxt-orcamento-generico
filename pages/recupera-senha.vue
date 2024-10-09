<template>
        <CabecalhoVisitante />
    <div justify="center" v-if="etapaAtual === 1">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Recuperação de Senha</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="E-mail*"
                    required
                    v-model="email"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indica campo obrigatório</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" @click="enviarEmail">
              Enviar E-mail de Recuperação
            </v-btn>
            <v-btn color="grey" @click="dialog = false">
              <b>Cancelar</b>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-btn @click="dialog = true" color="primary" :rounded="true">
        <v-icon>mdi-lock-reset</v-icon>
        Recuperar Senha
      </v-btn>
    </div>
  
    <div v-else>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="Código de Recuperação de Senha*"
              :error-messages="getErrorMessage('codigoVerificacao')"
              required
              v-model="recoveryCode"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
  
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :error-messages="getErrorMessage('novaSenha')"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
              label="Nova Senha*"
              required
              v-model="newPassword"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
  
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :error-messages="getErrorMessage('confirmaSenha')"
              :type="show2 ? 'text' : 'password'"
              @click:append="show2 = !show2"
              label="Confirmar Nova Senha*"
              required
              v-model="confirmPassword"
              ref="confirmaSenha"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
  
      <v-container>
        <v-row>
          <v-btn
            color="primary"
            :disabled="validacaoFormularaio"
            class="mx-4"
            @click="submitPasswordReset"
          >
            Enviar Nova Senha
          </v-btn>
          <v-btn color="grey" @click="cancelPasswordReset">Cancelar</v-btn>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  //import { useStore } from 'vuex'
  import EmailService from '@/Service/EmailService'
  import { RecuperacaoSenhaRequest } from '@/Service/Request/RecuperacaoSenhaRequest'
  //import Rotas from '@/router/Rotas'
  
//   const store = useStore()
//   const emailService = new EmailService()
  
  const dialog = ref(false)
  const email = ref('')
  const etapaAtual = ref(1)
  const mensagemAlerta = ref('')
  const recoveryCode = ref('')
  const newPassword = ref('')
  const confirmPassword = ref('')
  const show1 = ref(false)
  const show2 = ref(false)
  const router = useRouter();
  const enviarEmail = async () => {
   // store.dispatch('ATIVAR_CARREGAMENTO')
  
    try {
      //const dado = await emailService.pedidoCodigoTrocaSenha(email.value)
     // mensagemAlerta.value = dado
      alert(mensagemAlerta.value)
  
      if (mensagemAlerta.value !== 'Email não cadastrado') {
        etapaAtual.value = 2
      }
    } catch (error) {
      alert('Serviço indisponível no momento')
    } finally {
      //store.dispatch('DESATIVAR_CARREGAMENTO')
      dialog.value = false
    }
  }
  
  const submitPasswordReset = async () => {
    if (newPassword.value !== confirmPassword.value) {
      alert('As senhas não coincidem. Por favor, tente novamente.')
      return
    }
  
    const request = new RecuperacaoSenhaRequest()
    request.email = email.value
    request.codigoConfirmacao = recoveryCode.value
    request.novaSenha = newPassword.value
  
   // store.dispatch('ATIVAR_CARREGAMENTO')
  
    try {
     // await emailService.trocaDeSenha(request)
      alert('Sua senha foi alterada com sucesso!')
      router.push(Rotas.Visitante.Login)
    } catch {
      alert('Erro ao alterar senha')
    } finally {
     // store.dispatch('DESATIVAR_CARREGAMENTO')
    }
  }
  
  const cancelPasswordReset = () => {
    router.push(Rotas.Visitante.Login)
  }
  
  const getErrorMessage = (fieldName: string) => {
    switch (fieldName) {
      case 'codigoVerificacao':
        return !recoveryCode.value ? ['Campo obrigatório'] : null
      case 'novaSenha':
        return !newPassword.value ? ['Campo obrigatório'] : null
      case 'confirmaSenha':
        return !confirmPassword.value ? ['Campo obrigatório'] : null
      default:
        return null
    }
  }
  
  const validacaoFormularaio = computed(() => {
    return !recoveryCode.value || !newPassword.value || !confirmPassword.value || confirmPassword.value !== newPassword.value
  })
  </script>
  
  <style scoped>
  /* Estilos personalizados aqui, se necessário */
  </style>
  