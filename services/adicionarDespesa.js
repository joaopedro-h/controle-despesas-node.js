const Despesa = require("../models/Despesas");

function adicionarDespesa(rl, menu, listas) {
    
    console.clear();
    console.log("CONTROLE DE DESPESAS");

        rl.question(`Descrição: `, (descricao) => {

            rl.question(`Valor da despesa: `, (valor) =>{

                rl.question(`Categoria: `, (categoria) => {

                    const novoGasto = new Despesa(

                        id = listas.length + 1,
                        descricao,
                        Number(valor),
                        categoria

                    );

                    listas.push(novoGasto);
                    console.clear;
                    console.log("Despesa adicionada.\n\n");
                    menu();

                });
            });
        }); 
}

module.exports = adicionarDespesa;