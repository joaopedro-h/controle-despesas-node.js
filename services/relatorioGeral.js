function relatorioGeral(rl, listas, menu) {
    
    console.clear();
    console.log("=============== RELATÓRIO GERAL ===============\n");
    
        if (listas.length === 0) {
            console.log("Nenhuma despesa cadastrada!\n");
            menu();
            return;
        }

        let totalDespesas = listas.length;
        let totalGasto = 0;
        let maiorDespesa = 0;
        let menorDespesa = listas[0].valor;
        let valorGuardado = 0;
        let mediaGastos;

        for (let i = 0; i < listas.length; i++) {
            
            const gasto = listas[i];

            totalGasto += gasto.valor;
            valorGuardado = gasto.valor;

            if (valorGuardado > maiorDespesa) {
                maiorDespesa = valorGuardado
            }

            if (valorGuardado < menorDespesa) {
                menorDespesa = valorGuardado
            }
        }

        mediaGastos = totalGasto / totalDespesas;

        console.log(`Total de despesas: ${totalDespesas}`);
        console.log(`Total gasto: ${totalGasto.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`);
        console.log(`Maior despesa: ${maiorDespesa.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`);
        console.log(`Menor despesa: ${menorDespesa.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`);
        console.log(`Média de gastos: ${mediaGastos.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}\n`);

        console.log("==================================================\n");
    
        rl.question(`Pressione ENTER para voltar ao menu...`, (enter) => {

            if (enter === "") {
                menu();
                
            }else {
                return;
            }

        });
}

module.exports = relatorioGeral;