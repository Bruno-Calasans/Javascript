
    // exemplo 1 ----------------------------------
    const carrinho = [
        '{"nome": "borracha", "preco": 3.45}',
        '{"nome": "caderno", "preco": 13.90}',
        '{"nome": "kit de lápis", "preco": 41.22}',
        '{"nome": "caneta", "preco": 7.50}'
    ]

    // primeira forma
    let preços1 = carrinho.map(function(e){
        let obj = JSON.parse(e)
        return obj.preco
    })
    
    console.log(preços1)

    // segunda forma
    let toObject = json => JSON.parse(json)
    let toPrice = obj => obj.preco
    let precos2 = carrinho.map(toObject).map(toPrice)
    console.log(precos2)

    // exemplo 2 --------------------------------------------------------------
    Array.prototype.map2 = function(callback){

        // criando um novo array
        let novoArray = []

        for(let i = 0; i < this.length; i++){
            
            let key = i // chave do array original
            let elemento = this[i] // elemento com chave igual a key

            // o retorno da callback para cada elemento, chave e array
            let retornoCallback = callback(elemento, key, this)

            // inserindo o que retornar do callback no novo array
            novoArray.push(retornoCallback)
        }
        // retornando o novo array
        return novoArray
    }

    let resultado = carrinho.map2(toObject).map2(toPrice)
    console.log(resultado)