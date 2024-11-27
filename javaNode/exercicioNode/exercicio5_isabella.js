let prompt = require('prompt-sync')();

//Exercício 5: Cadastro de Produto e Cálculo de Valor Total
let nomepro = prompt('digite o nome do produto')
let preco = parseFloat(prompt('preço unitario'))
let quantidade = parseFloat(prompt('quantidade'))
let valortotal = preco * quantidade
let imposto = valortotal * 0.18
let valorcom = valortotal + imposto
console.log('produto' + nomepro + '\n preço unitario' + preco + '\n quantidade' + quantidade + '\n valor total: ' + valortotal + '\n imposto' + imposto + '\n valor total com imposto' + valorcom)