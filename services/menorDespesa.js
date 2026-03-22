function menorDespesa(rl, listas, menu) {
    
    console.clear();
    console.log("=============== MENOR DESPESA ===============\n");
    
        if (listas.length === 0) {  /* If utilizado para verificar se existe alguma despesa. */
            console.log("Nenhuma despesa cadastrada!\n");
            menu();
            return;
        }
        
        let menorValor = listas[0].valor;  /* Passado o primeiro valor do array para que pudesse ser comparado em seguida, caso o próximo seja menor é substituido */
        let descricao = listas[0].descricao;
        let categoria = listas[0].categoria;
        let id = listas[0].id;
        let valorAtual = 0;
    
        for (let i = 1; i < listas.length; i++) {

            const gasto = listas[i];
            
            valorAtual = gasto.valor;

            if (valorAtual < menorValor) {  /* Feito a comparação para saber se o próximo valor é menor. */
                menorValor = valorAtual;
                descricao = gasto.descricao;
                categoria = gasto.categoria;
            }
        }

        console.log(`ID: ${id}`);
        console.log(`Descrição: ${descricao}`);
        console.log(`Valor: ${menorValor.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`);
        console.log(`Categoria: ${categoria}\n`);
        console.log("==================================================\n");
        
        rl.question(`Pressione ENTER para voltar ao menu...`, (enter) => {  /*Rl adicionado para o usuário pressionar enter caso queira retornar ao menu. */

            if (enter === "") {
                menu();
                
            }else {
                return;
            }

        });
}

module.exports = menorDespesa;  /* Fazendo exportação da função para que seja importada pelo "require" no index.js */