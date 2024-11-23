let prompt = require('prompt-sync')();

//Exercício 8: Calculadora de Salário
let hps = parseFloat(prompt('numero de horas trabalhadas por semana'))
let vph = parseFloat(prompt('valor da hora trabalhada'))
let salariosm = hps * vph
let mensal = salariosm * 4
console.log('suas horas trabalhadas ' + hps + '\n valor por hora' + vph + '\n valor semanal ' + salariosm + '\n valor mensal ' + mensal)