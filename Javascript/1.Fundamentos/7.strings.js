const curso = "Cod3r"

console.log(curso.charAt(4)) //Mostra o conteúdo da posição 4
console.log(curso.charAt(5)) //Mostra o conteúdo da posição 5, que no caso, é vazia
console.log(curso.charCodeAt(1)) // Mostra o valor dentro da tabela Unicode ASCII
console.log(curso.indexOf('d')) //Encontrar o índice de determinado caractere
console.log(curso.substring(1)) //Encontrar a string a partir do índice 1
console.log(curso.substring(1,3)) //Encontrar a string a partir do índice 1 até o índice 3
console.log('Escola '.concat(curso).concat(' !')) //Concatenar/Agrupar palavras e ou caracteres
console.log("Escola"+ curso+ "!") //POde concatenar dessa forma também
console.log(curso.replace(3, 'e')) //Substituir 
console.log(curso.replace(/\d/, 'e')) //Substituir dígitos
console.log(curso.replace(/\w/g, 'e')) //Substituir todas as letras e dígitos (global)

console.log('Ana,Maria,Pedro'.split(',')) //Criar um array para quebrar a string

