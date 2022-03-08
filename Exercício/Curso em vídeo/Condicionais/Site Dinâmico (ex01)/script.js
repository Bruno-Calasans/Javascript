function atualizar_horas(){
    // Pegando os Elementos HTML
    var spanHoras = document.getElementById('horas')
    var pMsg = document.getElementById('msg')
    var imgHora = document.querySelector('#imagem_hora')
    var lgnImg = document.querySelector('#legenda_imagem')
    var body = document.body

    // Criar um objeto DATE
    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()

    
    // Criando String personalizada
    var stringHoras = `${horas}:${minutos}:${segundos}`

    // Colocando as horas no site
    spanHoras.innerHTML = stringHoras

   
    // Criando as Condições
    if (5 < horas && horas < 13){
        pMsg.innerHTML = 'Bom dia!'
        imgHora.src = 'media\\morning.jpg'
        lgnImg.innerHTML = 'Imagem da manhã'
        body.style.backgroundColor = 'rgba(243, 153, 89, 0.741)'

    }else if( horas >= 13 && horas < 17){
        pMsg.innerHTML = 'Boa tarde!'
        imgHora.src = 'media\\afternoon.jpg'
        lgnImg.innerHTML = 'Imagem da tarde'
        body.style.backgroundColor = '#FD9602'

    }else if(horas >= 17 && horas < 23){
        pMsg.innerHTML = 'Boa noite!'
        imgHora.src = 'media\\night.jpg'
        lgnImg.innerHTML = 'Imagem da noite'
        body.style.backgroundColor = '#898078'

    }else{
        pMsg.innerHTML = 'Boa madrugada!'
        imgHora.src = 'media\\dawn.jpg'
        lgnImg.innerHTML = 'Imagem da madrugada'
        body.style.backgroundColor = '#01526D'
    }
}
