var largura = Number(prompt('largura da parede'))
var altura = Number(prompt('Altura da parede'))
var area = largura * altura
var litroTinta = (area/2).toFixed(2)

alert(`\
Parede com dimensões ${largura}x${altura}m de área ${area}m²
Tinta necessária: ${litroTinta}l`)