

    // promise.race()
    const p1 = new Promise((resolve, reject)=>{

        setTimeout(
            () => {resolve('p1 terminou')}, 
        3000)

        setTimeout(
            () => {reject('p1 falhou')}, 
        3000)

    })

    const p2 = new Promise((resolve, reject)=>{

        setTimeout(
            () => {resolve('p2 terminou')}, 
        1000)

        setTimeout(
            () => {reject('p2 falhou')}, 
        3000)
    })

    const p3 = new Promise((resolve, reject)=>{

        setTimeout(
            () => {resolve('p3 terminou')}, 
        3000)

        setTimeout(
            () => {reject('p3 falhou')}, 
        3000)
    })

    let resultados = Promise.race([p1, p2, p3])

    // pegando o resolve da promise mais rápida
    resultados
    .then(
        (resultado) => console.log(resultado)
    )
    .catch(
        (falha) => console.log(falha)
    )

    