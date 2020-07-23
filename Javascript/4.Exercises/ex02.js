/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:

Equilátero: Os três lados são iguais. 
Isósceles: Dois lados iguais. 
Escaleno: Todos os lados são diferentes.

Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/ 

function triangulo(x, y, z) {
    if(x==y && y==z) {
        console.log("Triângulo Equilátero")
    } else 
        if(x==y || y==z || z==x) {
            console.log("Triângulo Isósceles")
        } else {
            console.log("Triângulo Escaleno")
        }
}

triangulo(7, 5, 4)