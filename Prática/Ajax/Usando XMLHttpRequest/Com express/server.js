
    // constantes
    const PORT = 8000

    // importações
    const express = require('express')
    const upload = require('./upload_config')

    // criando app principal
    const app = express()

   // definindo os body parsers
    app.use(express.urlencoded({extended: true})) // para parâmetros de URL
    app.use(express.json()) // para JSON

    // definindo um diretório de arquivos estáticos
    app.use('/ajax', express.static('ajax'))

    // criando rota para uploads
    app.post('/uploads', (req, res) => {

        upload(req, res, erro => {

            if(erro) return res.send('Um erro ocorreu:'+erro)
            res.end('Upload terminado!')
            
        })
    })

    // ligando o servidor
    app.listen(PORT, () => {
        console.log(`Servidor https://localhost:${PORT} executando`);
    })

    