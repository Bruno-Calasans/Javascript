

    // tratamento de erros

    function testarErro(valor, chanceErro){

        return new Promise((resolve, reject) => {

            if(Math.random() <= chanceErro) reject('erro')
            else resolve(valor)
        })
    }

    testarErro(100, 0.5)
        .then(console.log)
        .catch(console.log)
