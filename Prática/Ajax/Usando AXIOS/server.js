
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
    app.use('/axios', express.static('axios'))

    // 
    function isPar(req, res, next){

        let num = null
        if(req.params.num) num = req.params.num
        else num = req.query.num

        // caso tenha algum número
        if(num){
    
            if(num % 2 == 0 && num != 0) app.locals.par = true
            else app.locals.par = false
        }

        next()
    }
    app.get('/axios/*/parOuImpar', isPar, (req, res) => {

    
        if(app.locals.par) res.send({num: req.query.num, resultado: 'par'})
        else res.send({num: req.query.num, resultado: 'ímpar'})

    })

    app.get('/axios/*/parOuImpar/:num', isPar, (req, res) => {

 
        if(app.locals.par) res.send({num: req.query.num, resultado: 'par'})
        else res.send({num: req.query.num, resultado: 'ímpar'})

    })

    app.post('/axios/*/formulario', (req, res) => {

        let obj  = {recebido: true, ...req.body}
        res.send(obj)
    })

    app.post('/axios/*/formulario2', (req, res) => {

        let obj  = {recebidoform: true, ...req.body}
        res.send(obj)
    })
   
    // ligando o servidor
    app.listen(PORT, () => {
        console.log(`Servidor http://localhost:${PORT} executando`);
    })

   
