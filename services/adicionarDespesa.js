const Despesa = require("../models/Despesas");

function adicionarDespesa(rl, menu, listas, salvarDados) {
    
    console.clear();
    console.log("");

        rl.question(`Descrição: `, (descricao) => {

            if (descricao === "") {
                console.log("\nDescrição inválida!\n\n");
                menu();
                return;                
            }

            rl.question(`Valor da despesa: `, (valor) =>{

                if (valor <= 0) {
                    console.log("\nValor inválido!\n\n");
                    menu();
                    return;
                }

                rl.question(`Categoria: `, (categoria) => {

                    if (categoria === "") {
                        console.log("\nCategoria inválida!\n\n");
                        menu();
                        return;
                    }

                    const novoGasto = new Despesa(

                        id = listas.length + 1,
                        descricao,
                        Number(valor),
                        categoria

                    );

                    listas.push(novoGasto);
                    salvarDados();
                    console.clear;
                    console.log("\nDespesa adicionada.\n\n");

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
}

module.exports = adicionarDespesa;