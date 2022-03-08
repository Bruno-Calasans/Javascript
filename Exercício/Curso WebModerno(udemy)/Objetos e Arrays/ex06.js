

// solução 1
function inverter(valor){

    if(typeof valor == 'boolean') return !valor

    else if(typeof valor == 'number'){
        if(valor != 0) return (-valor); else return 0

    }else{
        return 'Boolean ou number esperado, mas o valor fornecido é do tipo '+typeof valor
    }
}


console.log(inverter(-1))