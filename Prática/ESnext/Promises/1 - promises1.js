

    // criando uma promise
   const myPromise = new Promise((resolve, reject) => {

        // código assíncrono a ser executando

        let resultado = ['João', 'Carlos', 'Pedro']

        // resolve é para quando o resultado for esperado
        if(resultado.length > 0) resolve(resultado);

        // reject para quando o resultado não for esperado
        else reject(false)
   })

   // acessando o resultado da promises
   myPromise
    .then(nomes => nomes[0]) // pegando primeiro nome
    .then( nome => `Seu nome é ${nome}`) // criando mensagem
    .then( msg => console.log(msg)) // exibindo mensagem
    .catch(resultado => console.log(resultado))

   // outra forma
   const pegarPrimeiroElemento = array => array[0]
   const criarMsg = nome => `Seu nome é ${nome}`

   myPromise
    .then(pegarPrimeiroElemento)
    .then(criarMsg)
    .then(console.log)
     