

     function gerarNum(min, max, tempo){

        // invertendo os valores se o mínimo for maior que o máximo
        if(min > max){

            // primeira forma
            /*let aux = min
            min = max
            max = aux*/

            // segunda forma - usando destructuring
            [min, max] = [max, min]
        }

        return new Promise((resolve) => {

            setTimeout(() => {

                let numSorteado = Math.floor(Math.random() * (max - min + 1) ) + min
                resolve(numSorteado)

            }, tempo * 1000)

        })
    }

    // retorna quando todas as promises tiverem terminado
    function gerarNums(min=0, max=100, quantidade=1){

        return Promise.all([
            gerarNum(0, 100, 1),
            gerarNum(0, 100, 2),
            gerarNum(0, 100, 3),
            gerarNum(0, 100, 4),
            gerarNum(0, 100, 5),
        ])
    }

    console.time('Iniciando o processo')
    gerarNums().then(console.log).then(console.time('Fim das promises'))

