function sair(rl) {
    console.clear();
    console.log("Desconectando...");
    rl.close(); /* Fechando o rl.question */
}

module.exports = sair;  /* Fazendo exportação da função para que seja importada pelo "require" no index.js */