
function classificarNota(nota){
    let notaArredondada = arredondar2(nota)
    let situação = ''

    if (notaArredondada < 40){
        situação = 'Reprovado'

    }else{
        situação = 'Aprovado'
    }
    console.log(`Nota final: ${notaArredondada}(${situação})`)
    
}


// primeira forma
function arredondar1(nota){
    let cont = nota
    while(true){
        cont++
        if(cont % 5 == 0){
            let diferença = cont - nota
            nota = (diferença < 3)? cont: nota
            return nota
        }
    }
}

// segunda forma
function arredondar2(nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))

    } else {
        return nota
    }
}
classificarNota(38)

