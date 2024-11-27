let prompt = require('prompt-sync')();


//10. O usuário coloca um numero, e o programa diz se é par ou impar

let numero = prompt('digite um numero')
if (numero % 2 === 0) { 
    console.log('o numero é par')
}
else {
    console.log('o numero é impar')
}