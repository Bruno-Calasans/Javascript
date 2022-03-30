
    const fs = require('fs')
    const caminho = 'teste.json'


    // ler arquivo com callback
    function lerArquivoC(caminho, callback){

        const config = {encoding:'utf-8', flag: 'r'}
        fs.readFile(caminho, config, (erro, dado) => {
            callback(erro, dado)
        })
        
    }

    // usando callback
    lerArquivoC(caminho, (erro, dado) => {

        if(erro) console.log(erro);
        console.log(dado);
    })


    // ler arquiv com promise
    function lerArquivoP(caminho){

        const config = {encoding:'utf-8', flag: 'r'}

        return new Promise((resolve, reject) => {

            fs.readFile(caminho, config, (erro, dado) => {
                if(erro) reject(erro)
                resolve(dado)
            })

        })
        
    }

    // usando promise
    lerArquivoP(caminho)
        .then(console.log)
        .catch(console.log)

    
    

    