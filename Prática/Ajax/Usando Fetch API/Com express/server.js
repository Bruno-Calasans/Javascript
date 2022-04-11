
    // constantes
    const PORT = 8000

    // importações
    const express = require('express')

    // criando app principal
    const app = express()

   // definindo os body parsers
    app.use(express.urlencoded({extended: true})) // para parâmetros de URL
    app.use(express.json()) // para JSON

    // definindo um diretório de arquivos estáticos
    app.use('/fetch', express.static('fetch'))

    function procurarUser(req, res, next){

        let users = require('./users.json')
        
        for(let user of  users){

            app.locals.buscaUser = false
            let reqNome = req.body.nome
            let reqSobrenome = req.body.sobrenome

            if(user.nome === reqNome && user.sobrenome == reqSobrenome){
                app.locals.buscaUser = true
                break
            }
        }

        next()
    }

    // definindo um rota para o formulário
    app.post('/fetch/exemplo2', procurarUser, (req, res) => {

        if(req.body) res.send({
            enviado: req.body, 
            registrado: app.locals.buscaUser
        })
    })

    app.get('/fetch/exemplo2', (req, res) => {
        res.send('Usou método GET')
    })

    // ligando o servidor
    app.listen(PORT, () => {
        console.log(`Servidor https://localhost:${PORT} executando`);
    })

    
