    
    
    

    // pegando elemento
    let divType = document.getElementById('type')
    
    // eventos de mouse
    let outputType = document.getElementById('outputType')
    divType.onclick = mostrarType
    divType.ondblclick = mostrarType
    divType.onmouseover = mostrarType
    divType.onmouseenter = mostrarType
    divType.onmouseleave = mostrarType
    divType.onmouseout = mostrarType

    function mostrarType(event){
        outputType.innerHTML = "Tipo de evento: "+event.type
    }

    // propriedade button e buttons
    let buttonDiv = document.getElementById('button')
    let outputButton = document.getElementById('outputButton')
    let outputButtons = document.getElementById('outputButtons')
    console.log(buttonDiv);

    buttonDiv.onmousedown = button
    //buttonDiv.onmousedown = buttons

    function button(event){

        switch(event.button){

            case 0:
                outputButton.innerHTML = 'Botão esquerdo' 
                break

            case 1:
                outputButton.innerHTML = 'Botão do meio' 
                break

            case 2:
                outputButton.innerHTML = 'Botão direito' 
                break

            case 3:
                outputButton.innerHTML = 'Botão voltar' 
                break

            case 4:
                outputButton.innerHTML = 'Botão avançar' 
                break
        }
    }

    function buttons(event){
        
    }

    // propriedade clientX e clientY
    document.onmousemove = client
    let outputClient= document.getElementById('outputClient')

    function client(event){
        let x = event.clientX
        let y = event.clientY
        outputClient.innerHTML = `X: ${x}; Y: ${y}`
    }

    // propriedade offsetX e offsetY
    let offsetDiv = document.getElementById('offset')
    offsetDiv.onmousemove = offset
    let outputOffset = document.getElementById('outputOffset')

    function offset(event){
        let x = event.offsetX
        let y = event.offsetY
        outputOffset.innerHTML = `X: ${x} Y: ${y}`
    }

    // propriedade screenX e screenY
    document.addEventListener('mousemove', screen_)
    let outputScreen = document.getElementById('outputScreen')

    function screen_(event){
        let x = event.screenX
        let y = event.screenY
        outputScreen.innerHTML = `X: ${x} Y: ${y}`
    }


    // propriedade pageX e pageY
    document.addEventListener('mousemove', page)
    let outputPage = document.getElementById('outputPage')

    function page(event){
        let x = event.pageX
        let y = event.pageY
        outputPage.innerHTML = `X: ${x} Y: ${y}`
    }