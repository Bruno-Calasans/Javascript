// Criando um objeto date

// Primeira forma
var data_atual = new Date()

// Segunda forma
var data_criada = new Date(2018, 11, 12, 20, 30, 60)
var data_criada = new Date(2018, 11, 12, 20, 30)
var data_criada = new Date(2018, 11, 12, 20)
var data_criada = new Date(2018, 11, 12)
var data_criada = new Date(2018, 11)

// Terceira forma
var epoch = new Date(1000000)

// Quarta forma
var dataString = new Date('March 23, 2000 20:30:10:1')
console.log(epoch, dataString)

// Pegando os valores
var ano = data_atual.getFullYear()
var mes = data_atual.getMonth()
var dia = data_atual.getDate()
var horas = data_atual.getHours()
var minutos = data_atual.getMinutes()
var segundos = data_atual.getSeconds()
var milli = data_atual.getMilliseconds()
var now = Date.now()

console.log(ano, mes, dia, horas, minutos, segundos, milli)
console.log(now)
