/*const peso1=1.0
const peso2=2.0
console.log(peso1,peso2)*/

const peso1=Number('8.0')
const peso2=Number('2.0')
console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
const avaliação1 = 2.7
const avaliação2 = 9.5
const total = avaliação1*peso1 + avaliação2*peso2
const media = total/(peso1+peso2)
//console.log(Média.toFixed(2))
console.log(media.toString(2))  //converter em string e() binário
console.log(typeof media)
console.log(typeof Number)
