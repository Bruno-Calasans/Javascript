
    
    // variáveis globais
    var dadoAtual = '' // dado que está sendo arrastado atualmente
    var dadoOriginal = '' // dado original
    var dropzoneOriginal = '' // drop zone inicial
    var dropZoneDiferente = false // se as drop zones atual e original são diferentes

    // feeback images
    const textImg = document.getElementById('textImg')

    // funções -------------------------------------------
    function dragStart(e, tipo, dado, img='', effect='move', allowed='all'){

        // definindo o dado e seu tipo e sua imagem de feedback
        const data = e.dataTransfer
        data.setData(tipo, dado) // dado e seu tipo
        if(img != '') data.setDragImage(img, 10, 10) // imagem de feedback

        // propriedades opcionais
        data.effectAllowed = allowed // tipo de efeito permitido

        // definindo as variáveis globais
        dadoOriginal = dado
        dropzoneOriginal = e.target.parentElement
    }

    function dragEnter(e, effect){

        // cancelando o evento dragenter
        e.preventDefault()

        // propriedades quem pode ser definidas
        e.dataTransfer.dropEffect = effect

        // destaque
        let dropzoneAtual = e.target
        dropzoneAtual.style.border = '1px solid black'
    }

    function dragLeave(e){
        // destaque
        let dropzoneAtual = e.target
        dropzoneAtual.style.border = ''
    }

    function dragOver(e, effect='move'){

        // cancelando o evento dragover
        e.preventDefault()

        // proprieadades opcionais
        e.dataTransfer.dropEffect = effect // efeito de drop
    }

    function drop(e, tipo){

        // pegando o dado que está sendo arrastado
        let dado = e.dataTransfer.getData(tipo)

        // atualizando o dado atual
        dadoAtual = dado

        // definindo drop zona
        let dropzoneAtual = e.target

        // definindo a drop zone
        if(dropzoneAtual != dropzoneOriginal){
            dropZoneDiferente = true

            // se for texto
            if(tipo == 'text/plain'){
                // dado será uma parte do texto ou o texto completo
                dropzoneAtual.innerText += dado

            // se for html
            }else if(tipo == 'text/html'){
                
                // dado será o id do elemento
                let elementoPraInserir = document.getElementById(dado)
                if(dropzoneAtual != elementoPraInserir)
                dropzoneAtual.appendChild(elementoPraInserir)
            } 

        }else{
            dropZoneDiferente = false
        }
    }

    function dragEnd(e, tipo=''){
        
        let resultadoOperação = e.dataTransfer.dropEffect

        if(resultadoOperação == 'none'){
            console.log('Operação cancelada');

        }else{
            console.log('Operação realizada com sucesso!');

            // verificando o tipo de dado
            if(tipo == 'text/plain'){

                // se a drop zone for diferente
                if(dropZoneDiferente){

                    let containerText = e.target.parentElement
                    let textoParent = containerText.innerText
                    let novoTexto = textoParent.replace(dadoAtual, '')
                    e.target.parentElement.innerText = novoTexto
                }
               
            }
        }

        // resetando as variáveis globais
        dropZoneDiferente = false

    }

    // criando drag-n-drop para textos -----------------------------------------

    // drag-n-drop de texto
    const dzText1 = document.getElementById('dzText1')
    const dzText2 = document.getElementById('dzText2')
    const span = document.getElementById('text')

    dzText1.ondragstart = function(e){
        dragStart(e, 'texto/plain', this.innerText, textImg)
    }

    dzText2.ondragstart = function(e){
        dragStart(e, 'texto/plain', this.innerText, textImg)
    }

    dzText1.ondragover = function(e){dragOver(e, 'move')}
    dzText2.ondragover = function(e){dragOver(e, 'move')}

    dzText1.ondrop = function(e){ drop(e, 'text/plain')}
    dzText2.ondrop = function(e){ drop(e, 'text/plain')}

    dzText1.ondragend = function(e){dragEnd(e, 'text/plain')}
    dzText2.ondragend = function(e){dragEnd(e, 'text/plain')}

    // criando drag-n-drop para elementos --------------------------------------
    const dzElemento1 = document.getElementById('dzElemento1')
    const dzElemento2 = document.getElementById('dzElemento2')
    const elemento = document.getElementById('elemento')

    elemento.setAttribute('draggable', 'true')

    dzElemento1.ondragstart = function(e){
        dragStart(e, 'text/html', elemento.id)
    }

    dzElemento2.ondragstart = function(e){
        dragStart(e, 'text/html', elemento.id)
    }

    dzElemento1.ondragover = dragOver
    dzElemento2.ondragover = dragOver

    dzElemento1.ondrop = function(e){ drop(e, 'text/html')}
    dzElemento2.ondrop = function(e){ drop(e, 'text/html')}

    dzElemento1.ondragend = function(e){dragEnd(e, 'text/html')}
    dzElemento2.ondragend = function(e){dragEnd(e, 'text/html')}

    dzElemento1.ondragenter = function(e){dragEnter(e)}
    dzElemento2.ondragenter = function(e){dragEnter(e)}

    dzElemento1.ondragleave= function(e){dragLeave(e)}
    dzElemento2.ondragleave = function(e){dragLeave(e)}

    // criando drag-n-drop para links --------------------------------------
    const dzLink1 = document.getElementById('dzLink1')
    const dzLink2 = document.getElementById('dzLink2')
