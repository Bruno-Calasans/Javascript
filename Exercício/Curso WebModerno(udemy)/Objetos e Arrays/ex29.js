
// solução 1
function melhorEstudante(obj){

    let melhorAluno = ''
    let maiorMedia = 0

    for(let aluno in obj){
        let numNotas = obj[aluno].length
        let media = obj[aluno].reduce((a, e) => (a + e)) / numNotas
        if(media > maiorMedia){maiorMedia = media; melhorAluno = aluno}
    }
    
    return {nome: melhorAluno, media: maiorMedia}

}

let obj = {
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}

console.log(melhorEstudante(obj))

// solução 2
function melhorEstudante2(obj){

    let melhorAluno = ''
    let maiorMedia = 0

}
melhorEstudante2(obj)