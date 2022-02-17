

    // usando  async 
    async function functionAsync(){
        return'Função com async'
    }

    // usando promise
    function functionPromise(){
        return Promise.resolve('Função com promise')
    }

    // acessando uma função async
    /*functionAsync()
    .then(
        (valor) => console.log(valor)
    )
  
    functionPromise()
    .then(
        (valor) => console.log(valor)
    )*/


    // usando await
    async function functionAwait(){

        console.log('começo')
        let temporizador = new Promise((resolve) =>{

            setTimeout(()=>{
                console.log('Meio')
                resolve()
            }, 3000)
        })
        await temporizador
        console.log('fim')
    }

    // executando a função com await
    functionAwait()