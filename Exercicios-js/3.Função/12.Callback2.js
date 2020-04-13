const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem callback

const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

//Com Callback

const notasBaixas2 = notas.filter(function(nota) {
    return nota<7
})
console.log(notasBaixas2)




//Com callback e function arrow

const notasBaixas3 = notas.filter(notas => notas<7)
console.log(notasBaixas3)





//Podendo reutilizar em todo o código

const notasMenor7 = notas => notas<7
const notasBaixas4 = notas.filter(notasMenor7)
console.log(notasBaixas4)

