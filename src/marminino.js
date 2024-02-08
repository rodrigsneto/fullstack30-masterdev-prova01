function executar(numero) {
    let resposta = "";

    if (numero % 3 === 0) { 
        resposta += "Mar";
    }

    if (numero % 4 === 0) {
        resposta += "Minino";
    }

    return resposta;
}

for (let i = 1; i <= 100; i++) {
    console.log(i + ": " + executar(i));
}

module.exports = executar;