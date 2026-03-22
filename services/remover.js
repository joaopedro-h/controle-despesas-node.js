function remover(rl, menu, listas, salvarDados) {
    
    console.clear();
    console.log("=============== DESPESAS CADASTRADAS ===============\n");
    
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
            console.log(`Categoria: ${gasto.categoria}\n`);
        }        
            console.log("==================================================\n")
            
            rl.question(`Insira o ID da despesa que deseja remover: `, (idDespesa) => {

                idDespesa = Number(idDespesa);
                
                let i = listas.findIndex(gasto => gasto.id === idDespesa );

                if (i === -1) {
                    console.log("\nID inválido!");
                    menu();
                    return;
                }

                listas.splice(i, 1);  /* splice() utilizado para fazer a remoção do objeto posição "i" no array */
                salvarDados();  /* Função chamada para salvar os dados removidos. */
                console.log("\nDespesa removida!\n");

                rl.question(`Pressione ENTER para voltar ao menu...\n`, (enter) => {  /*Rl adicionado para o usuário pressionar enter caso queira retornar ao menu. */

                    if (enter == "") {
                        menu();
                        
                    }else{
                        console.log("Inválido!");
                        return;
                    }

                });
            });
}

module.exports = remover;  /* Fazendo exportação da função para que seja importada pelo "require" no index.js */