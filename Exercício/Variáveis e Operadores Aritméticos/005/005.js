var metro = Number(prompt('Digite a medida em metros'))

var km = metro/1000
var hm = metro/100
var dam = metro/10

var dm = metro*10
var cm = metro*100
var mm = metro*1000

alert(`\
Olá, você digitou ${metro}m que vale:
${km}km
${hm}hm
${dam}dam
${dm}dm
${cm}cm
${mm}mm`)

