function listar(listas, menu) {

    console.clear();
    console.log("DESPESAS REGISTRADAS!\n\n");

        for (let i = 0; i < listas.length; i++) {

            const gasto = listas[i];

            console.log(`ID: ${gasto.id}`);
            console.log(`Descrição: ${gasto.descricao}`);
            console.log(`Valor: ${gasto.valor}`);
            console.log(`Categoria: ${gasto.categoria}\n\n`);
        }
        
        menu();
}

module.exports = listar;