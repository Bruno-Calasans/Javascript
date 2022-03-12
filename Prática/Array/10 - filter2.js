
    
    const produtos = [
        {nome: 'notebook', preco: 2499, fragil: true},
        {nome: 'iPad Pro', preco: 4099, fragil: true},
        {nome: 'copo de plástico', preco: 18.99, fragil: false},
        {nome: 'sofá', preco: 500, fragil: false}
    ]

    // criando um filter()
    Array.prototype.filter2 = function(callback){

        let novoArray = []
        for(let i = 0; i < this.length; i++){

            let key = i
            let elemento = this[i]

            // pegando o retorna do callback para cada elemento
            let retornoCallback = callback(elemento, key, this)

            // inserindo os elementos que passarem na validação 
            if(retornoCallback) novoArray.push(elemento)
        }
        return novoArray
    }

    // definindo os callbacks
    let produtoCaro = e => e.preco > 2000
    let fragil = e => e.fragil

    let resultado = produtos.filter2(produtoCaro).filter2(fragil)
    console.log(resultado)