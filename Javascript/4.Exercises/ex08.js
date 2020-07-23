// Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo).

// Obs.: O primeiro jogo não conta como novo recorde do melhor.Exemplo:String: “10 20 20 8 25 3 0 30 1”Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuaçãoaconteceu no sétimo jogo.)





// OBSERVAÇÃO: Como funciona o split()?
// O método split() divide uma string em um array de strings de acordo com algum separador; por exemplo, o espaço em branco ou algo determinado por uma expressão regular. Além disso, o caractere separador é removido das substrings resultantes no array. Exemplo: 

// var stringExemplo = "usuario@exemplo.com.br";
// var resultado = stringExemplo.split("@");
// O array retornado é: ["usuario", "exemplo.com.br"].