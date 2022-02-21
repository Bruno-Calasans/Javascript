

    // usando comandos json

    // convertendo JSON objetos para objetos
    const stringJson = 
    '{"Fruta":{"Nome": "maça", "Cor": "Vermelha", "Amarga": false}}'

    let convertidoParaObjeto = JSON.parse(stringJson)
    console.log(stringJson)

    // convertendo JSON array para objetoi
    const arrayJSON = '{"meuArray":["teste", 20, 85.4, true, false]}'

    let arrayJsonConvertidoObjeto = JSON.parse(arrayJSON)

    console.log(arrayJsonConvertidoObjeto)
     
    // convertendo objeto para json
    const fruta = {
        nome: "maça",
        cor: "vermelha",
        mordida: false,
    }

    let objetoConvertidoJson = JSON.stringify(fruta, space = "\n")
    console.log(objetoConvertidoJson)

    // convertendo array para json
    const meuArray = ['verdade', 90, 5.5, true, null]

    arrayConvertidoJson = JSON.stringify(meuArray)

    console.log(arrayConvertidoJson)
            


    

