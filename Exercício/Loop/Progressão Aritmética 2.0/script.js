function criarPA(){
    var a1 = Number(document.getElementById('a1').value)
    var r = Number(document.getElementById('razão').value)
    var txt = document.getElementById('pa_criada')
    if (a1 == 0 && r == 0){
        alert('Erro: você deve fornecer o pelo menos o primeiro termo!')
    
    }else{
        if (r ==0){
            alert('Alerta: como você não forneceu a razão, ela será considerada como 1')
            r = 1
        }
        var txt = document.getElementById('pa_criada')
        txt.innerHTML = 'P.A criada: '
        txt.innerHTML += `an = ${a1} + (n-1)${r} `
    }

}


function PA(){

    var a1 = Number(document.getElementById('a1').value)
    var an = Number(document.getElementById('an').value)
    var r = Number(document.getElementById('razão').value)

    if (a1 == 0 && an == 0 && r == 0){
        alert('Erro: todos os campos não podem estar vazios!')

    }else if (an == 0){
        alert('Erro: o campo "Termo (n)" não pode estar vazio!')

    }else{

        if (r == 0){
            alert('Aviso: como você não colocou a razão, ela será considerada como 1!')
            r = 1
        }
        var paTxt = document.getElementById('pa_txt')
        paTxt.innerHTML = 'Contando... <br>'

        // utilizando o while
        var cont = 1
        while (cont <= an){
            paTxt.innerHTML += `<b>${a1}</b> `
            a1 += r
            cont++
        }

        // utilizando o for
        /*for (var cont = 1; cont <= an; cont++){
            paTxt.innerHTML += `${a1} `
            a1 += r
        }*/

        paTxt.innerHTML += '\u{1F3C1}'
    }

}