// middleware/auth.ts

export default defineNuxtRouteMiddleware((to, from) => {

  const { $token } = useNuxtApp();
    const isAuthenticated = $token.getToken();

  if (
    to.path === "/sobre" ||
    to.path === "/cadastro-usuario" ||
    to.path === "/login"
  ) {
    console.log("JWT apagado");
    $token.removeToken();
    navigateTo(Rotas.Visitante.Login);
    return;
  }

  if (!isAuthenticated) {
    console.log("JWT apagado");
    $token.removeToken();
    return navigateTo('/login');
  }
});

