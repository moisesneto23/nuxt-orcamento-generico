// middleware/auth.ts

export default defineNuxtRouteMiddleware((to, from) => {
    const isAuthenticated = estaAutenticado();
  
    if (
      to.path === "/sobre" ||
      to.path === "/cadastro-usuario" ||
      to.path === "/login"
    ) {
      console.log("JWT apagado");
      localStorage.removeItem("ocirenegotnemacro");
      localStorage.removeItem("businessId");
      return;
    }
  
    if (!isAuthenticated) {
      localStorage.removeItem("ocirenegotnemacro");
      return navigateTo('/login');
    }
  });
  
  function estaAutenticado(): boolean {
    const autenticacao = localStorage.getItem("ocirenegotnemacro");
    return autenticacao !== null;
  }
  