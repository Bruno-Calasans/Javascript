
// primeira forma
function multiplicar(a=0, b=0){

    if(typeof a != 'number' || typeof b != 'number') 
    throw 'Erro1: insira apenas números'

    if(a < 0 || b < 0) throw 'Erro2: insira apenas números negativos'

    if(a.isInt() && b.isInt()){

        let resultado = 0
        for(let cont = 0; cont < b; cont++){
            resultado += a
        }
        return resultado

    }else throw 'Erro3: insira apenas números inteiros'

}

// método para verificar se o número é inteiro
Number.prototype.isInt = function(){

    let valorInteiro = Math.floor(this)
    let resto = this % valorInteiro
    if(resto == 0) return true; else return false

}

console.log(multiplicar(9, 5))

