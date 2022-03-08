
// solução 1
function comparar1(a=0, b=0){
    
    if(a === '' || b === '') throw 'Erro1.1: nenhum valor pode está vazio'
    if(a.constructor== Number & b.constructor == Number){

        if(a == b){
            return 'são iguais'
    
        }else if(a > b){
            return `${a} é maior que ${b}`
    
        }else{
            return `${b} é maior que ${a}`
        }

    }else{
        throw 'Erro1.2: só pode números'
    }
}

// solução 2
function comparar2(a=0, b=0){
    
    if(a === '' || b === '') throw 'Erro2.1: nenhum valor pode está vazio'
    if (isNaN(a) || isNaN(b)) throw 'Erro2.2: só números'
    if(typeof a != typeof b) throw 'Erro2.3: não pode string numérica'
    
    if(a == b){
        return 'são iguais'

    }else if(a > b){
        return `${a} é maior que ${b}`

    }else{
        return `${b} é maior que ${a}`
    }
}
    

console.log(comparar1(0, 0))
console.log(comparar2(0, 0))