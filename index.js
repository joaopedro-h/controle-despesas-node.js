const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const adicionarDespesa = require("./services/adicionarDespesa");
const listar = require("./services//listar");
const totalGastos = require("./services/totalGastos");
const remover = require("./services/remover");
const sair = require("./services/sair");


const fs = require("fs");

function salvarDados() {
    
    const dados = JSON.stringify(listas, null, 2);
    fs.writeFileSync("despesas.json", dados);
}

function carregarDados() {
    
    const dados = fs.readFileSync("despesas.json", "utf8");
    listas = JSON.parse(dados);
}

let listas = [];
function menu() {
    
    console.log("=============== MENU DE DESPESAS ===============\n");
    console.log("1 - Adicionar despesa.");1
    console.log("2 - Listar despesas.");
    console.log("3 - Mostrar total de gastos.");
    console.log("4 - Remover despesa.");
    console.log("0 - Sair.");
    
    rl.question(`\nEscolha uma opção: `, (opcao) => {

        if ((opcao < 0) || (opcao >= 5)) {
            console.log("\nOpção inválida, tente novamente!\n");
            menu();
            return
        }

        opcao = Number(opcao);

        switch (opcao) {
            
            case 1: 
                adicionarDespesa(rl, menu, listas, salvarDados);
                break;
        
            case 2:
                listar(rl, listas, menu);
                break;

            case 3:
                totalGastos(rl, listas, menu);
                break;
            
            case 4:
                remover(rl, menu, listas, salvarDados);
                break;

            case 0:
                sair(rl);
        }
    });
}

carregarDados();
menu();

