let prompt = require('prompt-sync')();


//Exercício 9: DESAFIO: Calculadora de Parcelas com Juros
let vtt = parseFloat(prompt('digite o valor total da compra'))
let np = parseFloat(prompt('numero de parcelas'))
let tj = parseFloat(prompt('taxa de juros'))
let vp = (vtt * tj * Math.pow(1 + tj, np)) /
let vtp = vp * np
console.log('valor total' + vtt + '\n numero de parcelas ' + np + '\n taxa de juros' + tj + '\n valor de cada parcela ' + vp + '\n valor total pago' + vtp)