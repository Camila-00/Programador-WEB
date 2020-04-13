const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[4])


valores[4]=10 // acrescentei um valor
console.log(valores)
console.log(valores.length)  //quantidade de elementos
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())   //exclui o último elemento
delete valores[0]            //exclui o valor do índice zero
console.log(valores)
console.log(typeof valores)    //array é do tipo object