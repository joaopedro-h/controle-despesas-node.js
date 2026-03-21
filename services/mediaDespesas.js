function mediaDespesas(rl, listas, menu) {
    
    console.clear();
    console.log("=============== MÉDIA DE GASTOS ===============\n");

        let totalGasto = 0;
        let totalDespesas;
        let mediaGastos;

        if (listas.lenth === 0) {
            console.log("Nenhuma despesa cadastrada!\n");
            menu();
            return;
        }
        
        for (let i = 0; i < listas.length; i++) {
            
            const gasto = listas[i];

            totalGasto += gasto.valor;
        }

        totalDespesas = listas.length;
        mediaGastos = totalGasto / listas.length;

        console.log(`Total de despesas: ${totalDespesas}`);
        console.log(`Total de gasto: ${totalGasto.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`);
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

module.exports = mediaDespesas;