function editarDespesa(rl, listas, menu, salvarDados) {
    
    console.clear();
    console.log("=============== DESPESAS REGISTRADAS ===============\n");
    
        if (listas.length === 0) {  /* If utilizado para verificar se existe alguma despesa. */
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


    rl.question(`Insira o ID da despesa que deseja editar: `, (idDespesa) => { /*Rl utilizado para pegar o ID da despesa que o usuário digitar. */

        idDespesa = Number(idDespesa);

         /* "i" vai receber o índice do produto encontrado dentro do array "listas" */
        let i = listas.findIndex(gasto => gasto.id === idDespesa) /* "gasto" usado no findIndex só existe dentro dessa função. */

        /* findIndex percorre todo o array, ele usa "gasto" como parametro para representar cada objeto do array naquele momento, em seguida ele compara "gasto.id" com "idDespesa".*/

        if (i === -1) {  /* Se não for encontrado nenhum código o findIndex retorna -1, nesse caso mostramos a mensagem e voltamos ao menu. */
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

            if (novaDescricao === "") {  /*If adicionado para caso o usúario queira manter a descrição. */
                console.log("Descrição não alterada!");                
                novaDescricao = gasto.descricao
            }

            rl.question(`Novo valor: `, (novoValor) => {

                novoValor = Number(novoValor);

                if (novoValor === "") {  /*If adicionado para caso o usúario queira manter o valor. */              
                    console.log("Valor não alterado!");
                    novoValor = gasto.valor;
                }

                if (novoValor <= 0) {  /*If adicionado para caso o usúario insira um valor zerado ou negativo */
                    console.log("Valor inválido, alteração não realizada!");
                    novoValor = gasto.valor;                   
                }

                rl.question(`Nova categoria: `, (novaCategoria) => {

                    if (novaCategoria === "") {  /*If adicionado para caso o usúario queira manter a categoria. */
                        console.log("Categoria não alterada!");
                        novaCategoria = gasto.categoria;                                 
                    }

                    gasto.descricao = novaDescricao;
                    gasto.valor = novoValor;
                    gasto.categoria = novaCategoria;
                    salvarDados();  /* Função chamada para salvar os dados alterados. */

                    console.log("Despesa alterada com sucesso!");
                    
                    rl.question(`Pressione ENTER para voltar ao menu...\n`, (enter) => {  /*Rl adicionado para o usuário pressionar enter caso queira retornar ao menu. */

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

module.exports = editarDespesa;  /* Fazendo exportação da função para que seja importada pelo "require" no index.js */