const Despesa = require("../models/Despesas");  /* Importando a classe Produto para poder criar novos objetos de produto */

function adicionarDespesa(rl, menu, listas, salvarDados) {
    
    console.clear();
    console.log("");

        rl.question(`Descrição: `, (descricao) => {  /* rl.question utilizado para perguntar ao usuário e guardar o valor em memória, ex : descrição, e assim por diante. */

            if (descricao === "") {  /* If criado para impossibilitar cadastrar despesas sem descrição. */
                console.log("\nDescrição inválida!\n\n");
                menu();
                return;                
            }

            rl.question(`Valor da despesa: `, (valor) =>{

                if (valor <= 0) {  /* If criado para impossibilitar cadastrar despesas com valor zerado ou negativo. */
                    console.log("\nValor inválido!\n\n");
                    menu();
                    return;
                }

                rl.question(`Categoria: `, (categoria) => {

                    if (categoria === "") {  /* If criado para impossibilitar cadastrar despesas sem categoria. */
                        console.log("\nCategoria inválida!\n\n");
                        menu();
                        return;
                    }

                    const novoGasto = new Despesa( /*Foi criado uma váriavel novoGasto, aonde irá armazenar o novo objeto criado, 'novoGasto' irá receber as propiedades de 'new Despesa' */

                        id = listas.length + 1, /* Os ID são criados automáticamente. */
                        descricao,
                        Number(valor),
                        categoria

                    );

                    listas.push(novoGasto);  /* Aqui foi adicionado a 'despesa' para listas via push.*/
                    salvarDados();  /* Função chamada para salvar os dados. */
                    console.clear;
                    console.log("\nDespesa adicionada.\n\n");

                    rl.question(`Pressione ENTER para voltar ao menu...\n`, (enter) => { /*Rl adicionado para o usuário pressionar enter caso queira retornar ao menu. */

                        if (enter === "") {
                            menu(); /* menu(); é utilizado para poder voltar ao menu inicial.*/

                        }else{
                            return;
                        }

                    });                   
                });
            });
        }); 
}

module.exports = adicionarDespesa;  /* Fazendo exportação da função para que seja importada pelo "require" no index.js */