const readline = require('readline');

const rl = readline.createInterface({  /* Rl utilizado para receber input do usuário nas funções. */
  input: process.stdin,
  output: process.stdout
});

const adicionarDespesa = require("./services/adicionarDespesa");  /* Aqui é feito a importção de todas as funções para o index. */
const listar = require("./services//listar");
const totalGastos = require("./services/totalGastos");
const remover = require("./services/remover");
const sair = require("./services/sair");
const maiorDespesa = require("./services/maiorDespesa");
const menorDespesa = require("./services/menorDespesa");
const editarDespesa = require ("./services/editarDespesa");
const despesasCategoria = require("./services/despesasCategoria");
const mediaDespesas = require("./services/mediaDespesas");
const relatorioGeral = require("./services/relatorioGeral");

const fs = require("fs");  /* Módulo criado para manipular arquivos em JSON. */
const { deflate } = require('zlib');

function salvarDados() {  /* Função criada para salvar os dados em JSON. */
    
    const dados = JSON.stringify(listas, null, 2);
    fs.writeFileSync("despesas.json", dados);
}

function carregarDados() {  /* Função criada para carregar os dados salvos em JSON. */
    
    const dados = fs.readFileSync("despesas.json", "utf8");
    listas = JSON.parse(dados);
}

let listas = [];  /* Declarado o nome do array. */
function menu() {
    
    console.log("=============== MENU DE DESPESAS ===============\n");
    console.log("1 - Adicionar despesa.");
    console.log("2 - Listar despesas.");
    console.log("3 - Mostrar total de gastos.");
    console.log("4 - Remover despesa.");
    console.log("5 - Maior despesa.");
    console.log("6 - Menor despesa.");
    console.log("7 - Editar despesa.");
    console.log("8 - Despesas por categoria.");
    console.log("9 - Média das despesas.");
    console.log("10 - Relatório geral."); 
    console.log("0 - Sair.");
    
    rl.question(`\nEscolha uma opção: `, (opcao) => {
        
        opcao = Number(opcao); /*Feito a conversão de string para número inteiro para que fosse compatível no case.*/

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

            case 5:
                maiorDespesa(rl, listas, menu);
                break;

            case 6:
                menorDespesa(rl, listas, menu);
                break;

            case 7:
                editarDespesa(rl, listas, menu, salvarDados);
                break;

            case 8:
                despesasCategoria(rl, listas, menu);
                break;

            case 9:
                mediaDespesas(rl, listas, menu);
                break;

            case 10:
                relatorioGeral(rl, listas, menu);
                break;

            case 0:
                sair(rl);

            default:
                console.log("\nOpção inválida, tente novamente!\n");
                menu();
        }
    });
}

carregarDados();  /* Função foi chamada antes de mostrar o menu para já carregar os dados salvos. */
menu();

