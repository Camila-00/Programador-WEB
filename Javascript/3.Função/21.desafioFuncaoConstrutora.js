function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade    

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}, eu tenho ${this.idade} anos.`)
    }
}

const p1 = new Pessoa('João', 26)
const p2 = new Pessoa('Camila', 34)
p1.falar()
p2.falar()


