
function analisarPontuação(string = ''){

    const pontos = string.split(', ')
    for(let i = 0; i < pontos.length; i++){
        pontos[i] = Number(pontos[i])
    }
    let menorPonto = pontos[0]
    let maiorPonto = pontos[0]
    let quebraDeRecordes = 0
    let piorJogo = 1
    let teste = []

    for(let cont = 0;  cont < pontos.length; cont++){

        if(pontos[cont] > maiorPonto){
            maiorPonto = pontos[cont]
            quebraDeRecordes++
            teste.push(pontos[cont])
        }

        if(pontos[cont] < menorPonto){
            menorPonto = pontos[cont]
            piorJogo = cont + 1
        }
    }
    return [quebraDeRecordes, piorJogo]
}

console.log(analisarPontuação('10, 20, 20, 8, 25, 3, 0, 30, 1'))