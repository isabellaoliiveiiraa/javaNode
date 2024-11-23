let prompt = require('prompt-sync')();

//Exercício 6: Calculadora de Desconto
let nomepro = prompt('digite o nome do produto')
let precoor = parseFloat(prompt('preço original do produto'))
let porcentagem = parseFloat(prompt('porcentegem do desconto'))
let valordes = (precoor *  porcentagem)
let precofinal = precoor + valordes
console.log('produto: ' + nomepro + '\n preço original: ' + precoor + '\n porcentagem do desconto: ' + porcentagem + '\n valor com desconto' + valordes + '\n valor total: ' + precofinal)