const imprimirResultado = function(nota) { //Removi a função do exemplo anterior e utilizei os conceitos que aprendi em C
    if((nota>=9)&&(nota<=10)) {
        console.log('Quadro de Honra')
    } else if((nota>=7)&&(nota<9)) {
        console.log('Aprovado')
    } else if((nota>=4)&&(nota<7)) {
        console.log('Recuperação')
    } else if((nota>0)&&(nota<4)) {
        console.log('Reprovado')
    } else {
       console.log('Nota Inválida!')
    }
 }

 imprimirResultado(10)
 imprimirResultado(8.9)
 imprimirResultado(6.55)
 imprimirResultado(2.3)
 imprimirResultado(-1)
 imprimirResultado(11)