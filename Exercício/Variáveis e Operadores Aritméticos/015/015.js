var graus = Number(prompt('Digite um ângulo(em graus)'))
var grausParaRad = graus * Math.PI/180
var sen = Math.round(Math.sin(grausParaRad))
var cos = Math.round(Math.cos(grausParaRad))
var tan = Math.round(Math.tan(grausParaRad))

alert(`\
Ângulo: ${graus}°
Graus para Rad: ${grausParaRad}
Seno: ${sen}
Cosseno: ${cos}
Tangente: ${tan}`)

var num = Math.floor(Math.random() * 10)+1
console.log(num)
