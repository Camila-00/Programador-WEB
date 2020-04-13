const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + ' !'  //não pode quebrar a linha pois dá erro
const template = `                         
    Olá, ${nome}!`
console.log(concatenacao, template)        //no template pode quebrar linha. Usar crase para abrir.

//EXPRESSÕES...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)