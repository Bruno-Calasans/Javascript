
// solução 1
function bissexto(ano=0){

    // se for múltiplo de 4 e não de 100
    if(ano % 4 == 0  && !(ano % 100 == 0)) return true
    // se for divisível por 400
    else if(ano % 400 == 0) return true
    else return false
}


console.log(bissexto(2020))
console.log(bissexto(2100))