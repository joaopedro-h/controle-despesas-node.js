function despesasCategoria(rl, listas, menu) {

    console.clear();
    console.log("=============== FILTRAR POR CATEGORIA ===============\n");

    let encontrouDespesa = false;  /* Variável criada para poder ser utilizada para comparar se a despesa foi encontrada na categoria. */

        if (listas.length === 0) {  /* If utilizado para verificar se existe alguma despesa. */
            console.log("Nenhuma despesa cadastrada!\n");
            menu();
            return;
        }

        rl.question(`Escolha uma categoria: `, (categoria) => {

            for (let i = 0; i < listas.length; i++) {
                
                const gasto = listas[i];
                
                /* Foram criadas varíaveis para que não fosse alterado diretamente na memória a categoria para letras minúsculas. */
                const categoriaDigitada = categoria.trim().toLowerCase(); 
                const categoriaGasto = gasto.categoria.trim().toLowerCase();

                /* toLowerCase(); converte todas as letras de uma string para minúsculas (para poder ser feita a comparação) caso o usuário escreva tudo com letra maiuscula e etc.*/
                /*trim(); remove espaços no início e no fim da string. */

                if (categoriaDigitada === categoriaGasto) {
                    
                    console.log(`\nID: ${gasto.id}`);
                    console.log(`Descrição: ${gasto.descricao}`);
                    console.log(`Valor: ${gasto.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`);
                    console.log(`Categoria: ${gasto.categoria}\n`);
                    encontrouDespesa = true;
                }
            }

            if (!encontrouDespesa) { /* Caso não encontre a despesa na categoria o if é executado. */
                console.log("Nenhuma despesa encontrada nessa categoria!\n");
                menu();
                return;
            }
            
            console.log("==================================================\n");
            
            rl.question(`Pressione ENTER para voltar ao menu...\n`, (enter) => {  /*Rl adicionado para o usuário pressionar enter caso queira retornar ao menu. */

                if (enter === "") {
                    menu();

                }else {
                    return;     
                }
            });
        });
}

module.exports = despesasCategoria;  /* Fazendo exportação da função para que seja importada pelo "require" no index.js */