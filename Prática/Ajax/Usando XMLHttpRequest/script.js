

  // usando promises ------------------------------------------------

  // função para iniciar requisições http
  function getRequest(url, async, sucesso, erro){

    // criando objeto XMlHttpRequest
    const rqst = new XMLHttpRequest()

    // usando o método GET
    rqst.open('GET', url, async)

    // enviando requisição
    rqst.send()

    // quando a requisição terminar
    rqst.onload = () => {

      // se tudo ocorrer bem
      if(rqst.status >= 200 && rqst.status < 300){
        sucesso(rqst.response)

      // caso dê algum erro
      }else{
        const error = {cod: rqst.status, msg: rqst.statusText}
        erro(error)
      }
        
    }

  }

  // pegando todos os botões
   const btns = document.getElementsByTagName('button')

  // elemento onde a página será exibida
  const output = document.getElementById('output')

  for(let btn of btns){

    // inserindo evento de click
    btn.onclick = () => {

      // pegando o atributo 'pag' de cada botão
      let pag = btn.getAttribute('pag', true)

      // inserindo a página requisitada dentro do elemento 'output'
      getRequest(pag, true, 

      // callback para sucesso
      (response) => {output.innerHTML = response},

      // calback para erros
      (erro) => {console.log(`${erro.cod}: ${erro.msg}`)}
      )

    }

  }

 



   
   