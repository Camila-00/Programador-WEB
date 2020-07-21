/* Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */

function operation(x, y) {
    let soma = x + y;
    let subtracao = x - y;
    let multiplicacao = x * y;
    let divisao = x / y;
    console.log(`Soma = ${soma}, Subtração = ${subtracao}, Multiplicação = ${multiplicacao}, Divisão = ${divisao}`);
}

operation(6, 3)