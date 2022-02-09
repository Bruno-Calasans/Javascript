var frase = prompt('Digite um frase').trim().toLowerCase()
var primeira = frase.indexOf('a')
var ultima = frase.lastIndexOf('a')

console.log(`\
Frase: ${frase}
Posição da primeira letra a: ${primeira}
Posição da última letra a: ${ultima}`)

