function totalGastos(rl, listas, menu) {

    console.clear();
    console.log("=============== RESUMO DAS DESPESAS ===============\n")

        if (listas.length === 0) {  /* If utilizado para verificar se existe alguma despesa. */
            console.log("Nenhuma despesa cadastrada!\n");
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

        console.log(`Quantidade de despesas: ${quantidadeID}`);
        console.log(`Total gasto: ${valorTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}\n`);
        console.log("==================================================")
        
        rl.question(`Pressione ENTER para voltar ao menu...\n`, (enter) => {  /*Rl adicionado para o usuário pressionar enter caso queira retornar ao menu. */

            if (enter == "") {
                menu();

            }else{
                console.log("Inválido!");
                return;
            }
        });
}

module.exports = totalGastos;  /* Fazendo exportação da função para que seja importada pelo "require" no index.js */