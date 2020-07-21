//A função carrega consigo o contexto no qual ela foi criada!
const valor = 'Global'

function primeiraFuncao() {
    console.log(valor)
}

function segundaFuncao() {
    const valor = 'Local'
    primeiraFuncao()
}

segundaFuncao()