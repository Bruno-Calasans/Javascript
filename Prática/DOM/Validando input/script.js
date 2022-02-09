var submit = document.getElementById('submit')
submit.addEventListener('click', teste)

function teste(){
    var input = document.getElementById('num')

    if (input.validity.rangeOverflow){
        input.setCustomValidity('Número não pode ser maior que 100')
        input.reportValidity()

    }else if (input.validity.rangeUnderflow){
        input.setCustomValidity('Número não pode ser menor que 0')
        input.reportValidity()

    }else if (! input.validity.valid){
        input.setCustomValidity('')
        input.reportValidity()
    }

}