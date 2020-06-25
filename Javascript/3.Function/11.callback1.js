const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}.${nome}`)
    /*Se quiser imprimir o index na frente troque a ordem 
    das variáveis, pois o forEach chama o index primeiro. */
}

fabricantes.forEach(imprimir)

// fabricantes.forEach(nada => console.log(nada))
