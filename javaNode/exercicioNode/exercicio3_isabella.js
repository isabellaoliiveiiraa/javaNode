let prompt = require('prompt-sync')();

//Exercício 3: Calculadora de Diferença
let n1 = prompt('digite o primeiro numero')
let n2 = prompt('digite o segundo numero')
n1 =  parseFloat(n1)
n2 =  parseFloat(n2)
 let diferenca = Math.abs(n1 - n2)
 console.log('a diferença entre eles é' + diferenca)