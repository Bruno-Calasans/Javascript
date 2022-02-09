var nomeCompleto= prompt('Digite seu nome completo').trim().toLowerCase()
var primeiroNome = nomeCompleto.slice(0, nomeCompleto.indexOf(' '))
var ultimoNome = nomeCompleto.slice(nomeCompleto.lastIndexOf(' '))


// Outra forma
var lista = nomeCompleto.split(' ')
primeiroNome = lista[0]
ultimoNome = lista[lista.length-1]

console.log(`\
Nome completo: ${nomeCompleto}
Primeiro nome: ${primeiroNome}
Último nome: ${ultimoNome}`)
