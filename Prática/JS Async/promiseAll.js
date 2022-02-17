

    // Promise.all()
    const p1 = new Promise((resolve, reject)=>{

        let teste = true
        if(teste){
            resolve('Ok 1')

        }else{
            reject('Erro 1')
        }
    })

    const p2 = new Promise((resolve, reject)=>{

        let teste = true
        if(teste){
            resolve('Ok 2')

        }else{
            reject('Erro 2')
        }
    })

    const p3 = new Promise((resolve, reject)=>{

        let teste = false
        if(teste){
            resolve('Ok 3')

        }else{
            reject('Erro 3')
        }
    })


    // criando uma promise com 3 promises
    let resultados = Promise.all([p1, p2, p3])

    // se nenhuma dê erro
    resultados.then(
        resultados => console.log(resultados)
    )
    // se alguma dê erro
    .catch(
        resultados => console.log(resultados)
    )


