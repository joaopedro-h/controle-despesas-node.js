function menorDespesa(rl, listas, menu) {
    
    console.clear();
    console.log("=============== MENOR DESPESA ===============\n");
    
        if (listas.length === 0) {
            console.log("Nenhuma despesa cadastrada!\n");
            menu();
            return;
        }
        
        let menorValor = listas[0].valor;
        let descricao = listas[0].descricao;
        let categoria = listas[0].categoria;
        let id = listas[0].id;
        let valorAtual = 0;
    
        for (let i = 1; i < listas.length; i++) {

            const gasto = listas[i];
            
            valorAtual = gasto.valor;

            if (valorAtual < menorValor) {
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
        
        rl.question(`Pressione ENTER para voltar ao menu...`, (enter) => {

            if (enter === "") {
                menu();
                
            }else {
                return;
            }

        });
}

module.exports = menorDespesa;