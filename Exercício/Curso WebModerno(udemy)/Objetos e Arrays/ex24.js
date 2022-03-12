
// solução 1
function buscar1(pesquisa='', array=[]){

    let palavrasEncontradas = []
    
    for(let elemento of array){
        if(elemento.includes(pesquisa) && pesquisa != '') 
        palavrasEncontradas.push(elemento)
    }
    return palavrasEncontradas
}
let x = ["programação", "mobile", "profissional"]

console.log(buscar1('', x))

// solução 2
function buscar2(pesquisa='', array=[]){

    return array.filter(
        (elemento) => elemento.includes(pesquisa) && pesquisa != '')
}

console.log(buscar2('m', x))