// Primeira possibiidade
var num = prompt('Digite um número real')
var parteInteira = num.slice(0, num.indexOf('.'))
var parteFracionaria = num.slice(num.indexOf('.')+1)

// Segunda possibilidade
parteInteira = Math.trunc(num)
parteFracionaria = (num - parteInteira)
console.log(num, parteInteira)
console.log(num, parteFracionaria)
Math.ta