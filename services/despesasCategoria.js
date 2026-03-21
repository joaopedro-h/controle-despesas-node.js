function despesasCategoria(rl, listas, menu) {

    console.clear();
    console.log("=============== FILTRAR POR CATEGORIA ===============\n");

    let encontrouDespesa = false;

        if (listas.length === 0) {
            console.log("Nenhuma despesa cadastrada!\n");
            menu();
            return;
        }

        rl.question(`Escolha uma categoria: `, (categoria) => {

            for (let i = 0; i < listas.length; i++) {
                
                const gasto = listas[i];
                
                const categoriaDigitada = categoria.trim().toLowerCase();
                const categoriaGasto = gasto.categoria.trim().toLowerCase();

                if (categoriaDigitada === categoriaGasto) {
                    
                    console.log(`\nID: ${gasto.id}`);
                    console.log(`Descrição: ${gasto.descricao}`);
                    console.log(`Valor: ${gasto.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`);
                    console.log(`Categoria: ${gasto.categoria}\n`);
                    encontrouDespesa = true;
                }
            }

            if (!encontrouDespesa) {
                console.log("Nenhuma despesa encontrada nessa categoria!\n");
                menu();
                return;
            }
            
            console.log("==================================================\n");
            
            rl.question(`Pressione ENTER para voltar ao menu...\n`, (enter) => {

                if (enter === "") {
                    menu();

                }else {
                    return;     
                }
            });
        });
}

module.exports = despesasCategoria;