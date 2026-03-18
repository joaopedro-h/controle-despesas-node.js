function totalGastos(listas, menu) {

    console.clear();
    console.log("TOTAL DE GASTOS");

    let valorTotal = 0;
    let quantidadeID = 0;

        for (let i = 0; i < listas.length; i++) {
        
            const gasto = listas[i];

            quantidadeID = listas.length;
            valorTotal += gasto.valor;

        }

        console.log(`\nQuantidade de despesas: ${quantidadeID}`);
        console.log(`Total gasto: ${valorTotal}\n\n`);
        menu();
}

module.exports = totalGastos;