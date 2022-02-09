var nome = prompt('Digite um nome')
var nomeCorrigido = nome.replace(/ /g, '')
var nomeMaiusculo = nome.toUpperCase()
var nomeMinusculo = nome.toLowerCase()
var numLetras = nomeCorrigido.length
var primeiroNome = nome.slice(0, nome.indexOf(' '))
var numPrimeiroNome = primeiroNome.length

console.log(`\
Nome completo: ${nome}
Nome corrigido: ${nomeCorrigido}
Nome maiúsculo: ${nomeMaiusculo}
Nome minúsculo: ${nomeMinusculo}
Nº de letras: ${numLetras}
Primeiro nome: ${primeiroNome}
Nº de letras do primeiro nome ${numPrimeiroNome} `)