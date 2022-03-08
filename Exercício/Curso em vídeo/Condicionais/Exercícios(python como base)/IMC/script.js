function calcular_imc(){
    var peso = document.getElementById('peso').value
    var altura = document.getElementById('altura').value
    var situação = document.getElementById('situação')
    var imcText = document.getElementById('imctxt')
    var imc = ((peso)/(altura ** 2)).toFixed(2)
    
    if (imc < 18.5){
        situação.innerHTML = 'abaixo do peso'

    }else if (imc < 25){
        situação.innerHTML = 'peso ideal'

    }else if(imc < 30){
        situação.innerHTML = 'sobrepeso'

    }else if (imc <= 40){
        situação.innerHTML = 'obesidade'

    }else{
        situação.innerHTML = 'obesidade mórbida'
    }

    imcText.innerHTML = imc
}  