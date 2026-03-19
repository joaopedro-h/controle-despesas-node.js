function sair(rl) {
    console.clear();
    console.log("Desconectando...");
    rl.close();
}

module.exports = sair;