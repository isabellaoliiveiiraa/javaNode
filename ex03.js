let prompt = require('prompt-sync')();


//EXERCÍCIO 3: Dicionário de cores

let cor = prompt('digite a cor que voce quer traduzir' )

switch (cor) {
    case "red" :
        console.log('red significa vermelho')
        break
        case "blue": 
        console.log('blue significa azul')
        break
        case "green": 
        console.log('green signufica verde')
        break
        default:
            console.log('opção invalida')
}