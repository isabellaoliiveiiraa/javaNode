let prompt = require('prompt-sync')();

// DESAFIO media + faltas

let nomea = prompt('nome do aluno')
let nota1 = parseFloat(prompt('digite a primeira nota'))
let nota2 = parseFloat( prompt('digite a segunda nota'))
let nota3 = parseFloat(prompt('digite a terceira nota'))
let faltas = parseFloat(prompt('digite a quantidade de faltas'))
let media = (nota1 + nota2 + nota3) / 3
let situacao ;
if (media >= 7 && faltas < 25) {
    situacao = 'aprovado'
}
else if (media >= 5 && faltas < 25) {
     situacao = 'recuperacao'
}
else {
    situacao = 'reprovado'
}
   
console.log(
    'aluno: ' + nomea + '\n media: ' + media.toFixed(2) + 'faltas: ' + faltas.toFixed(2) + 'situacao ' + situacao
)

