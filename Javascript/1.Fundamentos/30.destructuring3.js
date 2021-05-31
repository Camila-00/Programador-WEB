// A função já vai tirar os atributos "min" e "max" de dentro do objeto como parâmetros

function rand({min=0,max=1000})
{
    const valor = Math.random()*(max-min)+min
    return Math.floor(valor)
}

console.log(rand({max:50,min:40}))

const obj = {max: 20, min: 30}
console.log(rand(obj))

// O valor máximo por padrão atribuiu 1000
console.log(rand({min:955}))

//Objeto vazio: os valores mínimo e máximo foram os atribuídos por padrão(1000 e 0)
console.log(rand({}))

//Sem objeto dá erro pois "undefined" ou "null"
console.log(rand())