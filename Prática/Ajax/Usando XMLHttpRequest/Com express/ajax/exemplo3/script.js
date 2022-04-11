


    //
    function ajax(config){

        const xhr = new XMLHttpRequest

        xhr.onreadystatechange  = e => {

            // quando termianar a requisição
            if(xhr.readyState == 4){

                // caso dê tudo certo
                if(xhr.status >= 200 && xhr.status < 300)
                config.sucesso(xhr.responseXML)
                
                // caso dê merda
                else if(xhr.status >= 400)
                config.erro({cod: xhr.status, msg: xhr.statusText})
            }
            
        }

        xhr.open(config.method, config.url, true)
        xhr.send()
    }

    // pegando elemento para exibir o resultado
    const output = document.getElementById('output')

    ajax({
        url: '../dados/estados.xml',
        method: 'GET',
        sucesso(xml){
            const estados = xml.getElementsByTagName('estado')

            // lista onde os estados serão inseridos
            const lista = document.createElement('ol')

            let arrayObjs = elementToObj(estados)
            for(let obj of arrayObjs){

                // item da lista
                const item = document.createElement('li')
                item.innerHTML = `Nome: ${obj.nome}(${obj.sigla})`
                lista.appendChild(item) // inserindo dentro da lista
            }

            output.appendChild(lista)
        },
        erro(obj){output.innerHTML = `${obj.cod}:${obj.msg}`}
    })

    function elementToObj(...elementos){

        // verificando se há apenas um elemento no array elementos
        if(elementos.length  == 1){
            let elemento = elementos[0]
            
            if(isArray(elemento)) elementos = elemento
            if(isHtmlColection(elemento)) elementos = elemento
        }

        // onde será guardado os objetos dos elementos
        let arrayObjs = []

        for(let elemento of elementos){

            const obj = {}
            const objAtbs = elemento.attributes
            // criando um objeto com os seus próprios atributos
            for(let atb in objAtbs){
                
                const nome = objAtbs[atb].name // nome do atributo
                const valor = objAtbs[atb].value // valor do atributo

                // só será inserido no obj se tiver algum valor
                if(valor) obj[nome] = valor 
            }
            
            // guardando os objs dentro do array
            //if(comprimento == 1) return obj // caso seja apenas um elemento
            arrayObjs.push(obj)
        }

        return arrayObjs
    }

    function isArray(dado){
        if(dado.constructor == Array) return true
        else return false
    }

    function isHtmlColection(dado){
        if(dado.constructor == HTMLCollection) return true
        else return false
    }

    