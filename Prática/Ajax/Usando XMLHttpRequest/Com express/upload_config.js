
    // importando o multer
    const multer = require('multer')

    // criando configurações
    const fieldName = 'arquivo'
    const storage = multer.diskStorage({

        destination: (req, file, cb) => cb(null, 'uploads'),

        filename: (req, file, cb) => {
            const prefix = Date.now()
            cb(null, `${prefix}-${file.originalname}`)
        }
    })

    const upload = multer({storage}).single(fieldName)


    // exportando 
    module.exports = upload
