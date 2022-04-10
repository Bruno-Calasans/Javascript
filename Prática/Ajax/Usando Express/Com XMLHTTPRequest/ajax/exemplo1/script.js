
    function ajax(config){

        
        const xhr = new XMLHttpRequest()

        xhr.open(config.method, config.url, true)

        // quando iniciar
        xhr.onloadstart = e => {if(config.start) config.start()}

        // durante a requisição
        xhr.onprogress = e => {if(config.durante) config.durante()}

        // quando a transferência de dados terminar
        xhr.onload = e => {

            if(xhr.status >= 200 && xhr.status < 300){
                config.sucesso(xhr.response)
            }
            else if (xhr.status >= 400){

                const httpError = {cod: xhr.status, msg: xhr.statusText}
                config.falha(httpError)
            } 
        }

        // quando der erro
        xhr.onerror = e => {if(config.erro) config.erro()}

        // quando a requisição terminar
        xhr.onloadend = e => {if(config.end) config.end()}

        xhr.send()
    }


    // iniciando a requisição
    ajax({
        method: 'GET',
        url: 'dados/estados.json',
        sucesso(response){

            const estados = JSON.parse(response)
            let table = criarTabela(...estados)

            inserirDentro('tabela', table)
            
        },
        falha(httpError){console.log(`${httpError.cod}: ${httpError.msg}`)},

        erro(){console.log('Algo deu errrado')}
    })


    function isArray(dado){
        if(dado.constructor == Array) return true
        else return false
    }

    function isObj(dado){

        if(dado.constructor == Object) return true
        else return false
    }

    function isString(dado){

        if(dado.constructor == String) return true
        else return false
    }

    function criarElemento(tag, html, classeId, useId=false){

        const elemento = document.createElement(tag)
        elemento.innerHTML = html ?? ''

        if(classeId){
            if(useId) elemento.id = classeId
            else elemento.className = classeId
        }
        return elemento
    }

    function inserirDentro(id, elemento){

        let parent = document.getElementById(id)
        parent.appendChild(elemento)
    }

    function criarHeader(...ths){

        // abrindo linha
        let header = document.createElement('tr')

        let elemento = ths[0]

        if(ths.length == 1 && !isString(elemento)){

            // para arrays
            if(isArray(elemento)){

                for(let th of elemento){
                    header.appendChild(criarElemento('th', th))
                }
            }

            // para objetos
            else if (isObj(elemento)){
                for(let th in elemento){
                    header.appendChild(criarElemento('th', th))
                }
            }

            // para valores passados soltos
        }else{
            for(let th of ths){
                header.appendChild(criarElemento('th', th))
            }
        }

        return header
    }

    function criarLinha(...tds){

        // abrindo linha
        let linha = criarElemento('tr')

        let elemento = tds[0]

        if(tds.length == 1 && !isString(elemento)){
 
            // para arrays
            if(isArray(elemento)){

                for(let td of elemento){ 
                    linha.appendChild(criarElemento('td', td))
                }
            }

            // para objetos
            else if (isObj(elemento)){

                for(let atributo in elemento){
                    linha.appendChild(criarElemento('td', elemento[atributo]))
                }
            }
 
            // para valores passados soltos
        }else{

            for(let td of tds){
                linha.appendChild(criarElemento('td', td))
            }
        }
 
        return linha
    }

    function criarTabela(...objs){

        const table = criarElemento('table')

        // criando header com os atributos do primeiro objeto
        const header = criarHeader(objs[0])
        table.appendChild(header)


        // criando uma linha usando os valores do objeto
        for(let obj of objs){

            let linha = criarLinha(obj)
            table.appendChild(linha)
        }

        return table
    }

 

 


