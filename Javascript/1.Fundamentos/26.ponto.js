console.log(Math.ceil(6.11))

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2'  //É a mesma coisa da definição anterior
console.log(obj1.nome)

function Obj(nome)
{
    this.nome = nome
    this.exec = function()
    {
        console.log('Exec...')
    }
}
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()

//A notação "ponto" serve tanto para atributos quanto para funções!!
// https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Basics#nota%C3%A7%C3%A3o_de_ponto
