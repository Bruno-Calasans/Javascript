// Usando o switch
var diaSemana = new Date().getDay();
var msg;


switch (diaSemana){

    case 0:
        msg = 'Domingo'
        console.log(msg)
        break
    case 1:
        msg = 'Segunda'
        console.log(msg)
        break
    case 2:
        msg = 'Terça'
        console.log(msg)
        break
    case 3: 
        msg = 'Quarta'
        console.log(msg)
        break
    case 4:
        msg = 'Quinta'
        console.log(msg)
        break
    case 5:
        msg = 'Sexta'
        console.log(msg)
        break
    default:
        msg = 'Sábado' 
        console.log(msg)
        break
}

// Condições múltiplas
var teste = 1

switch(teste){
    case 0:
        console.log('Caso 0')
        break
    case 1:
        console.log('Primeiro case')
        break
    case 1:
        console.log('Segundo case')
        break
}

// Comparação restrita
var teste2 = '0'
switch(teste2){
    case 0:
        console.log('Caso número')
        break
    case '0':
        console.log('Caso string')
        break
}

