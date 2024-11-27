let prompt = require('prompt-sync')();

//EXERCÍCIO 2: Menu de Operações Matemáticas
let operacao = parseInt(prompt('escolha a operação deseja fazer (1= adição, 2= subtração 3= multiplicação e 4= divisão)'))
let n1 = parseFloat(prompt('digite o primeiro numero'))
let n2 = parseFloat(prompt('digite o segundo numero'))

switch (operacao) {
case 1: 
console.log('O resultado da operação de ' + n1 + 'e ' + n2 + 'É igual a ' + (n1 + n2) )
break

case 2: 
console.log('O resultado da operação de ' + n1 + 'e ' + n2 + 'É igual a ' + (n1 - n2) )
break

case 3:
    console.log('O resultado da operação de ' + n1 + 'e ' + n2 + 'É igual a ' + (n1 * n2) )
    break

    case 4:
        console.log('O resultado da operação de ' + n1 + 'e ' + n2 + 'É igual a ' + (n1 / n2) )
        break
        default:
            console.log("Opção inválida");
            break;
}