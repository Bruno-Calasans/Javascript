

    function ajaxUpload(config){
        
        const xhr = new XMLHttpRequest

        // enquanto os dados estiverem sendo upados
        xhr.upload.onprogress = e => {
            
            if(config.progresso){

                let carregado = e.loaded
                let total = e.total

                let obj = {
                    carregado,
                    total,
                    percentual: (carregado / total * 100).toPrecision(3)
                }
                config.progresso(obj)
            }
        }

        xhr.open('POST', config.url, true)
        xhr.send(config.formData)
    }


    // pegando a div e o formulário
    const div = document.getElementById('progresso')
    const barra = document.querySelector('.barra-progresso')
    const input = document.getElementById('fileUpload')

    input.onchange = e => {

        const fd = new FormData
        let name = e.target.name
        let file = e.target.files[0]
        fd.append(name, file)

        ajaxUpload({

            url: '/uploads',
            formData: fd,
            progresso(obj){
                div.innerText = `[${obj.percentual}%]`
                barra.style.width = `${obj.percentual}%`
            }

        })
    }

