

// parâmetros
function teste(a, b){

    if(a == undefined | b == undefined){
        return 'Está faltando algum parâmetro';

    }else{
        return 'nenhum parâmetro está faltando';
    }

}

// passando poucos argumentos
console.log(teste(10))


function teste2(a, b){

    if(arguments.length > 2){
        return 'Você passou mais que 2 argumentos'

    }else if(arguments.length == 2){
        return 'Você passou 2 argumentos'

    }else{
        return 'Você passou menos que 2 argumentos'
    }   
    
}

// passando muitos argumentos
console.log(teste2(1, 2, 3))

function mostrarArgumentos(){

    let array = [];
    for(let cont = 0; cont < arguments.length; cont++){
        array.push(arguments[cont])
    }
    return array;
}
// mostrando todos os argumentos passados
console.log(mostrarArgumentos(1, 2, 3, 4, 6))



