//Criando uma classe

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    falar() {
        console.log(`Meu nome é ${this.nome}, eu tenho ${this.idade} anos.`)
    }
}

const p1 = new Pessoa('João', 26)
p1.falar()

// Função Factory

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Marcos')
p2.falar()