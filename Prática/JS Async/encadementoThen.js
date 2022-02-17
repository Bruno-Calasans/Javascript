
    // encademanto de then's

    function gerarRandom(){
        return (Math.floor((Math.random() * 10)))
    }

    const gerarUmNumero = new Promise((resolve, reject)=>{

        let resultado = gerarRandom()
        console.log(resultado)

        if(resultado <=5){
            resolve(resultado)
        }
        else{
            reject(resultado)
        }

    })

    // encadeamento de then
    gerarUmNumero
    .then( // peguei o valor do resolve e modifiquei
        (valor) => {return valor + 1}
    )
    .then( // pegando o novo valor modificado
        (novoValor) => {console.log('Resultado esperado: '+novoValor)}
    )
    .catch(
        (valor) => {console.log('Resultado inesperado: '+valor)}
    )

    