function maiorDespesa(rl, listas, menu) {
    
    let maiorValor = 0;
    let valorAtual = 0;
    let descricao, categoria;
    
    console.clear();
    console.log("=============== MAIOR DESPESA ===============\n");
    
        if (listas.length === 0) {
            console.log("Nenhuma despesa cadastrada!\n");
            menu();
            return;
        }

        for (let i = 0; i < listas.length; i++) {
            
            const gasto = listas[i];

            valorAtual = gasto.valor;

            if (valorAtual > maiorValor) {
                maiorValor = valorAtual;
                descricao = gasto.descricao;
                categoria = gasto.categoria;
            }
        }

        console.log(`Descrição: ${descricao}`);
        console.log(`Valor: ${maiorValor.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`);
        console.log(`Categoria: ${categoria}\n`);
        console.log("==================================================\n");
        
        rl.question(`Pressione ENTER para voltar ao menu...`, (enter) => {

            if (enter === "") {
                menu();
                
            }else {
                return;
            }

        });
}

module.exports = maiorDespesa;