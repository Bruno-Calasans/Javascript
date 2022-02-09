var longString = 'Teste você'
console.log(longString.slice(-1))

var city = 'cidade'
city = city.toLowerCase()
city = city[0].toUpperCase() + city.slice(1)
console.log(city)

var a = '       Teste    '
console.log(a)
console.log(a.trim())

var b = 'Teste se você é você'
console.log(b.lastIndexOf('você'))

var str = '5'
var pad = '[0]'
console.log(str.padEnd(3, pad))

var texto = 'Sou um texto'
console.log(texto.charAt(3))
console.log(texto[99])

texto = 'você é banana'
console.log(texto.slice(7, 13))
