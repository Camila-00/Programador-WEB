/*
Novo recurso do ES2015: operador de "desestruturação", ou seja, ele tira 
da estrutura alguma coisa. Exemplo: forma de extrair de dentro de um objeto{} 
seus atributos. Tirar elementos de dentro de um array[].
*/

const pessoa = 
{
    Nome: 'Ana',
    Idade: 5,
    Endereço: 
    {
        Logradouro: 'Rua ABC',
        Número: 1000.
    }
}

// Tire do objeto 'pessoa' os atributos 'nome' e 'idade'
const{Nome, Idade} = pessoa
console.log(Nome, Idade)

// Criando variáveis com  nomes diferentes para receber os atributos('n' e 'i')
const{Nome: n, Idade: i} = pessoa
console.log(n, i)

const{sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {Endereço:{Logradouro, Número, cep}} = pessoa
console.log(Logradouro, Número, cep)

// const{conta: {ag, num}} = pessoa
// console.log(ag, num)