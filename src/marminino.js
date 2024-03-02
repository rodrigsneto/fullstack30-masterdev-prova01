function executar(numero) {

    resposta = ""

    if (numero % 3 == 0) {
        resposta += "Mar";
    }

    if (numero % 4 == 0) {
        resposta += "Minino";
    }

    return resposta;
    
}

i = 1;

for (i; i <= 100; i++) {
    console.log(i + " = " + executar(i));
}

module.exports = executar;