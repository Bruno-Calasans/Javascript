var km = parseFloat(prompt('Quantidade de KM percorridos?'))
var dia = parseInt(prompt('Quantidade de dias de aluguel?'))
var valorPagar = (60*dia + 0.15*km).toFixed(2)

alert(`\
Km rodados: ${km}
Dias alugados: ${dia}
Total a pagar: R$${valorPagar}`)