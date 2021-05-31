
const saudacao = 'Opa' //Contexto Léxico 1
function exec()
{
    const saudacao = 'Falaaa'  // Contexto Léxico 2
    return saudacao
    
}

//Objetos são grupo aninhados de pares nome/valor

const cliente = 
{
    Nome: 'Pedro',
    Idade: 32,
    Peso: 90,
    Endereço:
    {
        Logradouro: 'Rua muito legal',
        Número: 123.
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

 