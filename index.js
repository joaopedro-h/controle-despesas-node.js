const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const adicionarDespesa = require("./services/adicionarDespesa");
const listar = require("./services//listar");
const totalGastos = require("./services/totalGastos");


let listas = [];
function menu() {
    
    console.log("1 - Adicionar despesa.");1
    console.log("2 - Listar despesas.");
    console.log("3 - Mostrar total de gastos.");
    console.log("4 - Remover despesa.");
    console.log("5 - Sair.");
    
    rl.question(`\nEscolha uma opção: `, (opcao) => {

        opcao = Number(opcao);

        switch (opcao) {

            case 1: 
                adicionarDespesa(rl, menu, listas);
                break;
        
            case 2:
                listar(listas, menu);
                break;

            case 3:
                totalGastos(listas, menu);
                break;
            
            case 4:
                remover();
                break;

            case 5:
                sair();
        }
    });
}

menu();

