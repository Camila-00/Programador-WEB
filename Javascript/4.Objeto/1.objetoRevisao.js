//Coleção dinâmica de pares chave/valor

const produto = new Object();
produto.nome = "Cadeira";
produto["Marca do produto"] = "Genérica";
produto.preco = 220;

console.log(produto);

delete produto.preco;
delete produto["Marca do produto"];

console.log("Após e exclusão: ");
console.log(produto);

const carro = {
    modelo: "A4",
    valor: 89000,
    proprietario: {
        nome: "Raul",
        idade: 56,
        endereco: {
            logradouro: "Rua ABC",
            numero: 123,
        },
    },
    condutores: [
        {
            nome: "Júnior",
            idade: 19,
        },
        {
            nome: "Ana",
            idade: 42,
        },
    ],
    calcularValorSeguro: function () {
        //código aqui...
    }
};

console.log(carro)
console.log("XXXXXXXXXXXXXXX")

carro.proprietario.endereco.numero = 1000

console.log(carro)
console.log("XXXXXXXXXXXXXXX")

carro['proprietario']['endereco']['logradouro'] = 'Av. Gigante'

console.log(carro)
console.log("XXXXXXXXXXXXXXX")

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)