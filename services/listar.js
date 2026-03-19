function listar(rl, listas, menu) {

    console.clear();
    console.log("=============== DESPESAS REGISTRADAS ===============\n");

        if (listas.length === 0) {
            console.log("Nenhuma despesa cadastrada!");
            menu();
            return;           
        }


        for (let i = 0; i < listas.length; i++) {

            const gasto = listas[i];

            console.log(`ID: ${gasto.id}`);
            console.log(`Descrição: ${gasto.descricao}`);
            console.log(`Valor: ${gasto.valor}`);
            console.log(`Categoria: ${gasto.categoria}\n\n`);
        }
        
        console.log("==================================================\n");

        rl.question(`Pressione ENTER para voltar ao menu...\n`, (enter) => {

            if (enter == "") {
                menu();

            }else{
                console.log("Inválido!");
                return;
            }
        });
}

module.exports = listar;