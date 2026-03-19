function totalGastos(rl, listas, menu) {

    console.clear();
    console.log("=============== RESUMO DAS DESPESAS ===============")

        if (listas.length === 0) {
            console.log("Nenhuma despesa cadastrada!");
            menu();
            return;          
        }

        let valorTotal = 0;
        let quantidadeID = 0;

        for (let i = 0; i < listas.length; i++) {
        
            const gasto = listas[i];

            quantidadeID = listas.length;
            valorTotal += gasto.valor;
        }

        console.log(`\nQuantidade de despesas: ${quantidadeID}`);
        console.log(`Total gasto: ${valorTotal}\n`);
        console.log("==================================================")
        
        rl.question(`Pressione ENTER para voltar ao menu...\n`, (enter) => {

            if (enter == "") {
                menu();

            }else{
                console.log("Inválido!");
                return;
            }
        });
}

module.exports = totalGastos; 