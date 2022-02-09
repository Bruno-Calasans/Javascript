var submit = document.getElementById('submit')
submit.addEventListener('click', fatorial)

function fatorial(){
    var num = document.getElementById('num').value
    var txt = document.getElementById('resultado')
    txt.innerHTML = ''
    var rst = 1
    for (num; num >= 1; num--){

        txt.innerHTML += (num == 1) ? `${num} `: `${num} x `;
        rst *= num
    }
    txt.innerHTML += `= ${rst}`

}
