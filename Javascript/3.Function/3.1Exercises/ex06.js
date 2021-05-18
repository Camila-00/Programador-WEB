// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples(capital, taxa, tempo) {
    juros = capital * (taxa/100) * tempo
    montante = capital + juros
    console.log(montante)
}

function jurosComposto(capital, taxa, tempo) {
    montante = capital * ((1 + (taxa/100)) ** tempo)
    console.log(montante)
    console.log(montante.toFixed(2).replace(".", ","))

}

jurosSimples(100, 10, 2)
jurosComposto(10250, 10, 2)



