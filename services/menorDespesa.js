function menorDespesa(rl, listas, menu) {
    
    let menorValor = listas[0].valor;
    let descricao = listas[0].descricao;
    let categoria = listas[0].categoria;
    let valorAtual = 0;
    
    console.clear();
    console.log("=============== MENOR DESPESA ===============\n");
    
        for (let i = 1; i < listas.length; i++) {

            const gasto = listas[i];
            
            valorAtual = gasto.valor;

            if (valorAtual < menorValor) {
                menorValor = valorAtual;
                descricao = gasto.descricao;
                categoria = gasto.categoria;
            }
        }

        console.log(`Descrição: ${descricao}`);
        console.log(`Valor: ${menorValor}`);
        console.log(`Categoria: ${categoria}\n\n`);
        console.log("==================================================\n");
        
        rl.question(`Pressione ENTER para voltar ao menu...`, (enter) => {

            if (enter === "") {
                menu();
                
            }else {
                return;
            }

        });
}

module.exports = menorDespesa;