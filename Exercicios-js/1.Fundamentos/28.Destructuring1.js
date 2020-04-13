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

const{Nome, Idade} = pessoa
console.log(Nome, Idade)

const{Nome: n, Idade: i} = pessoa
console.log(n, i)

const{sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {Endereço:{Logradouro, Número, cep}} = pessoa
console.log(Logradouro, Número, cep)

const{conta: {ag, num}} = pessoa
console.log(ag, num)