
    let array = [9, 5.6, 8, 3, 10]

    // sem callback
    let notas1 = []
    for(let nota of array){
        if(nota >= 6){notas1.push(nota)}
    }
    console.log(notas1)

    // usando callback com função anônima
    let notas2 = array.filter(function(nota){return nota > 7})
    console.log(notas2)

    // usando callback com arrow function
    let notas3 = array.filter(nota => nota > 7)
    console.log(notas3)

