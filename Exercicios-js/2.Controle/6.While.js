function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`A opção escolhida foi ${opcao}.`) // Isso é um template string, iniciado/terminado com acento grave
}                                                  // (backtick em ingles), dessa forma quando você usa o ${} 
console.log('Até a próxima!')                      // dentro dessas chaves algo sera EXECUTADO e não apenas mostrado.