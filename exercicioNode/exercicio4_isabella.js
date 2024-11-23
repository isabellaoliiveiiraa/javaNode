let prompt = require('prompt-sync')();


//Exercício 3: Calculadora de Diferença
let temperatura = prompt('qual a temperatura que vai ser convertida?')
temperatura = parseFloat(temperatura)
convertido = temperatura  * 9/5 + 32
console.log('a temperatura ' + temperatura + ' convertida para  Fahrenheit é ' + convertido)