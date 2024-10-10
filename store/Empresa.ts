import InformacoesEmpresa from "~/Model/InformacoesEmpresa";

export const storeInformacoesEmpresa = defineStore('informacoesEmpresa', () => {
    
    const informacaoEmpresa = ref<InformacoesEmpresa>();

    const adicionarInformacoesEmpresa = (dado: InformacoesEmpresa) => {
        informacaoEmpresa.value = dado;
    };

    const limparInformacoesEmpresa = () => {
        informacaoEmpresa.value = new InformacoesEmpresa();
    }

    return {informacaoEmpresa, adicionarInformacoesEmpresa, limparInformacoesEmpresa };
});