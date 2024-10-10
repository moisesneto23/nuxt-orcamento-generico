import { useCookie } from '#app'; // Hook para manipular cookies no Nuxt 3

export default defineNuxtPlugin((nuxtApp) => {
  // Nome do cookie onde o token será armazenado
  const cookieName = 'auth_token';

  return {
    provide: {
      token: {
        // Função para obter o token
        getToken() {
          const tokenCookie = useCookie(cookieName);
          return tokenCookie.value;
        },
        
        // Função para definir ou atualizar o token
        setToken(token: string) {
          const tokenCookie = useCookie(cookieName, {
            maxAge: 60 * 60 * 24, // 1 dia de validade
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production', // HTTPS only in production
          });
          tokenCookie.value = token; // Atualiza o valor do cookie
        },
        
        // Função para remover o token
        removeToken() {
          const tokenCookie = useCookie(cookieName);
          tokenCookie.value = null; // Remove o valor do cookie
        },
      },
    },
  };
});
