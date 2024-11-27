let prompt = require('prompt-sync')();

//Exercício 2: Calculadora de Idade
let anonasc =  prompt('digite o ano que vc nasceu')
let anoatual = prompt('digite o ano atual')
anonasc = parseFloat(anonasc)
anoatual = parseFloat(anoatual)
subtracao = anoatual - anonasc
console.log('a sua idade é ' + subtracao)