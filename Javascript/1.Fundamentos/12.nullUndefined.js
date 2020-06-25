let valor            //Não definido
console.log(valor)
// console.log(valor2)  //Não declarado

valor = null         // Ausência de valor
console.log(valor)
//console.log(valor.toString())   //ERRO! Não acessa algo de variável nula 

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)
produto.preco = undefined   //evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)
produto.preco = null  //Sem preço!
console.log(!!produto.preco)
console.log(produto)