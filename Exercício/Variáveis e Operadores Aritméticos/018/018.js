var num = Number(prompt('Digite um número'));
var aux;

var milhar = Math.floor(num/1000)
aux = Math.floor(num % 1000)

var centena = Math.floor(aux/100)
aux = Math.floor(aux % 100)

var dezena = Math.floor(aux/10)
aux = Math.floor(aux % 10)

var unidade = aux

console.log(`\
Número ${num}
Milhar: ${milhar}
Centena: ${centena}
Dezena: ${dezena}
Unidade: ${unidade}`)

// outra forma seria utilizando o método para acochoar strings
