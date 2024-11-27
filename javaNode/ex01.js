let prompt = require('prompt-sync')();

//EXERCÍCIO 1 - Escolha de Bebida

let  pedido =parseInt(prompt("Qual bebida o senhor(a) deseja? Água(1) /suco(2) /refrigerante (3)/café (4)?"))

switch (pedido) {
case 1:
console.log("Aqui está sua Água. Se hidrate para evita pedra no rim.")
break
case 2:
console.log("Aqui está seu Suco. Natural, aquele tang ainda vai te dar problema vai veno.")
break
case 3:
console.log("Aqui está seu Refrigerente. E o projetinho academia? nunka?")
break
case 4:
console.log("Aqui está seu Café. Aproveite! Café sempre é uma boa.")
break
default :
console.log("OPÇÃO INVÁLIDA.")
}