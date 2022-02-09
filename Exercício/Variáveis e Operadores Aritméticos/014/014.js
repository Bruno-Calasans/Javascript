var a = Number(prompt('Cateto Oposto'))
var b = Number(prompt('Cateto Adjacente'))
//var hip = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
var hip = Math.sqrt(a**2 + b**2)
alert(`\
Cateto Oposto: ${a}
Cateto Oposto: ${b}
Hipotenusa: ${hip}`)