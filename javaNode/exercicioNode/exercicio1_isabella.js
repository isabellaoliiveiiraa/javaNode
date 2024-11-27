let prompt = require('prompt-sync')();

//Exercício 1: Calculadora de Soma
let n1 = prompt('digite o primeiro numero')
let n2 = prompt('digite o segundo numero')
n1 = parseFloat(n1) 
n2 = parseFloat(n2)
soma = n1 + n2
console.log('a soma de ' + n1 + 'e ' + n2 + 'é igual a ' + soma)

//Exercício 5: Cadastro de Produto e Cálculo de Valor Total
let produto = prompt('diga o nome do produto')
let quantidade = prompt('quantidade desejada')
let valoruni = prompt('qual o valor unitario?')
let total = Number(quantidade) * Number(valoruni)
let multiplicar = quantidade * valoruni
console.log('Você comprou ' + quantidade + 'unidades de ' + produto + 'por R$ ' + valoruni + ' totalizando R$ ' + multiplicar )

//Exercício 6: Calculadora de Desconto






