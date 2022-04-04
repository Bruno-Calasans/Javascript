
    const output = document.getElementById('output')

    const btn1 = document.getElementById('btn1')
   

    btn1.onclick = () => {

        // usando fetch para pegar uma página
        fetch('pag1.html')

        // tratando a requisição
        .then(response =>{

            // se a requisição for ok
            if(response.ok){
                return response.text()

            // caso dê problema na requisição
            }else{
                let cod = response.status
                let msg = response.statusText
                console.error(`${cod}:${msg}`)
            }
        })
        // inserindo a página requisitada no elemento 'output'
        .then(texto => output.innerHTML = texto)

    }

    const btn2 = document.getElementById('btn2')

    btn2.onclick = () => {

        // usando fetch para pegar JSON
        fetch('dados.json')

        // tratando a requisição
        .then(response => {
            if(response.ok)return response.json()
        })

        .then(json => output.innerHTML = `${json.nome} tem ${json.idade} anos e ${json.trabalhando ? 'está': 'não está'} trabalhando`)

        .catch(console.log)
    }
