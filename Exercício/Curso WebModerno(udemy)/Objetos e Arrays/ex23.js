
// solução 1
function contarCaractere1(caractere, string){

    let numVezes = 0
    for(let letra of string){
        if(caractere === letra) numVezes++
    }
    return numVezes

}
let x = "A sorte favorece os audazes"
let y = "Conhece-te a ti mesmo"

console.log(contarCaractere1("r", x) )
console.log(contarCaractere1("c", y) )


// solução 2
function contarCaractere2(caractere='', string=''){

    let letras = string.split('')
    let numVezes = letras.filter((letra) => letra == caractere)
    return numVezes.length
}

console.log(contarCaractere2("r", x) )
console.log(contarCaractere2("c", y) )


