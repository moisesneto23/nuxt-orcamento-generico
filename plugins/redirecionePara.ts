export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      useRedirecionePara(href: string) {
        window.location.href = href;
      }
    }
  };
});
