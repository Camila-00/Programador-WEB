//Escopo criado quando uma função é definida, declarada.
//Permite a função acessar e manipular variáveis externas à função
//Contexto léxico em ação!!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

 const resultado = fora()
console.log(resultado())