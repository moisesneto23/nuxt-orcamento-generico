export default defineNuxtPlugin((nuxtApp) => {
    return {
      provide: {
        utlilidades: {
            redirecionarPara (href: string) {
               return window.location.href = href;
        },  
        }
    }
}})
  
  