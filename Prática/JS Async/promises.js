

    // promises - primeira estrutura
    const promise = new Promise((resolve, reject) => {
    
        // operação a ser executada
        let x = false

        if(x){
            // se for algo esperado
            resolve('Tudo ok')

        }else{
            // se não for algo esperado
            reject('Erro')
        }

    })

    function mostrar(msg){console.log(msg)}

    // promises - segunda estrutura
    promise
    .then( // se for sucesso

        (msg) => {mostrar(msg)} 
    )
    .catch( // se falhar

        (msg) => {mostrar(msg)}

    )

    function gerarRandom(){
        return (Math.floor((Math.random() * 10)))
    }

    // mais exemplos de promises
     let randomNumbers = new Promise((resolve, reject) =>{

        let resultado = gerarRandom();

        if(resultado <= 5){
            resolve('Resultado é menor ou igual a 5')

        }else if(resultado < 8){
            reject('Resultado é menor que 8 e maior que 5')

        }else{
            reject('Resultado é maior que 8')
        }

    })

    randomNumbers
    .then(
        (valor1) => {console.log(valor1)}
    )
    .catch(
        (valor2) => {console.log(valor2)}
    )
    

  