
  // usando callback com objeto ----------------------------------------------

  function request(obj={}){

      const rqst = new XMLHttpRequest
      rqst.open(obj.method, obj.url, obj.async)
      rqst.send()

      // quando a requisição terminar
      rqst.onload = () => {

        // se tudo ocorrer bem
        if(rqst.status >= 200 && rqst.status < 300){
          obj.sucesso(rqst.response)

        // caso dê algum erro
        }else{
          const error = {cod: rqst.status, msg: rqst.statusText}
          obj.erro(error)
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
      request({

        method: 'GET',
        url: pag,
        async: true,
        sucesso(e){output.innerHTML = e},
        erro(erro){console.log(`${erro.cod}: ${erro.msg}`)}

      })
    }

  }

 



   
   