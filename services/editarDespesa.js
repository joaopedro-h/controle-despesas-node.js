function editarDespesa(rl, listas, menu, salvarDados) {
    
    console.clear();
    console.log("=============== DESPESAS REGISTRADAS ===============\n");
    
        if (listas.length === 0) {
            console.log("Nenhuma despesa cadastrada!\n");
            menu();
            return;
        }

        for (let i = 0; i < listas.length; i++) {

            const gasto = listas[i];

            console.log(`ID: ${gasto.id}`);
            console.log(`Descrição: ${gasto.descricao}`);
            console.log(`Valor: ${gasto.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`);
            console.log(`Categoria: ${gasto.categoria}\n\n`); 
        }

    console.log("==================================================\n");


    rl.question(`Insira o ID da despesa que deseja editar: `, (idDespesa) => {

        idDespesa = Number(idDespesa);

        let i = listas.findIndex(gasto => gasto.id === idDespesa)

        if (i === -1) {
            console.log("ID inválido!");
            menu();
            return;            
        }

        const gasto = listas[i];

        console.clear();
        console.log("\nEditando despesa: \n");
        console.log("========================================\n");
        console.log(`Descrição atual: ${gasto.descricao}`);
        console.log(`Valor atual: ${gasto.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`);
        console.log(`Categoria atual: ${gasto.categoria}\n`);
        console.log("========================================\n\n");
        
        
        rl.question(`Nova descrição: `, (novaDescricao) => {

            if (novaDescricao === "") {
                console.log("Descrição não alterada!");                
                novaDescricao = gasto.descricao
            }

            rl.question(`Novo valor: `, (novoValor) => {

                novoValor = Number(novoValor);

                if (novoValor === "") {                         
                    console.log("Valor não alterado!");
                    novoValor = gasto.valor;
                }

                if (novoValor <= 0) {
                    console.log("Valor inválido, alteração não realizada!");
                    novoValor = gasto.valor;                   
                }

                rl.question(`Nova categoria: `, (novaCategoria) => {

                    if (novaCategoria === "") {
                        console.log("Categoria não alterada!");
                        novaCategoria = gasto.categoria;                                 
                    }

                    gasto.descricao = novaDescricao;
                    gasto.valor = novoValor;
                    gasto.categoria = novaCategoria;
                    salvarDados();

                    console.log("Despesa alterada com sucesso!");
                    
                    rl.question(`Pressione ENTER para voltar ao menu...\n`, (enter) => {

                        if (enter === "") {
                            menu();
                            
                        }else{
                            return;
                        }

                    });
                });
            });
        });
    });
}

module.exports = editarDespesa;