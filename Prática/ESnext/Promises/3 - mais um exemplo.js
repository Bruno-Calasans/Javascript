


    // mais um exemplo de promise
    function gerarNum(min, max){

        // invertendo os valores se o mínimo for maior que o máximo
        if(min > max){

            // primeira forma
            /*let aux = min
            min = max
            max = aux*/

            // segunda forma - usando destructuring
            [min, max] = [max, min]
        }


        return new Promise((resolve, reject) => {

            let numSorteado = Math.floor(Math.random() * (max - min + 1) ) + min
            console.log(numSorteado);
            resolve(numSorteado)

        })
    }

    gerarNum(0, 10, 5)
        .then(num => num * 2)
        .then(numX2 => numX2 + 10)
        .then(console.log)
        .catch(console.log)

