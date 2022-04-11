
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

    // definindo um rota para o formulário
   
    // ligando o servidor
    app.listen(PORT, () => {
        console.log(`Servidor http://localhost:${PORT} executando`);
    })

    
