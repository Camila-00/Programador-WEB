const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}
 
pessoa.falar()
 
/*Nesse caso, foi armazenada em uma constante apenas a função
sem seu contexto, portanto o this muda. Essa é uma das particularidades
do Javascript*/
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO
 
/*O ES 2015 trouxe função bind que atrela o contexto de um objeto
a uma funcao, no caso abaixo.*/
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()