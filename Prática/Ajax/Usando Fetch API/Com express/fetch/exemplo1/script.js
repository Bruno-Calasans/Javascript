


    // usando fetch API
    let url = '../dados/estados.json'

    const output = document.getElementById('output')

    fetch(url)

        // retorna um objeto response
        .then(res => {
            
            if(res.ok) return res.json()
            else throw new Error(`HTTP Error ${res.status}: ${res.statusText}`);
        })

        .then(estados => {

            const lista = document.createElement('ol')
    
            estados.forEach(estado => {

                let item = document.createElement('li')
                item.style.listStyle = 'none'
                item.innerHTML = `
                ID: ${estado.id}|
                Nome: ${estado.nome} (${estado.sigla})`
                lista.appendChild(item)
            })

            output.appendChild(lista)
            
        })
        // pegando o erro lançado
        .catch(console.log)

    
        

    
        
