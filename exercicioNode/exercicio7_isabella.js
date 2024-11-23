let prompt = require('prompt-sync')();

//Exercício 7: Calculadora de Parcelas sem juros
let valortt = parseFloat(prompt('digite o valor total da compra'))
let numerop = parseFloat(prompt('numero de parcelas'))
let valorp = valortt / numerop
console.log('valor total da compra' + valortt + '\n numero de parcelas' + numerop + '\n valor total das parcelas ' + valorp)