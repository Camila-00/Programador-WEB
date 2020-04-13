let isAtivo = false
console.log(isAtivo)

isAtivo=true
console.log(isAtivo)

isAtivo=1
console.log(!!isAtivo)   // ! negar !! negar duas vezes torna verdadeiro

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])   //array/vetor
console.log(!!{})   //objeto
console.log(!!(isAtivo=true))

console.log('OS falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=false))
console.log('Para finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = 'Lucas'
console.log(nome || 'Desconhecido')