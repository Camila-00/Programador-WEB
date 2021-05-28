
function teste()
{
    console.log('a = ', a)
    var a=2
    console.log('a =', a)
}
teste()
// console.log('a=', a)

// Esse efeito de "içamento" só ocorre se o tipo da variável for "var"
// com let isso dará erro. Não há benefícios conhecidos para essa funcionalidade,
// ou seja, declare sua variável antes!