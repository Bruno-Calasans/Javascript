function verificar_bissexto(){
    var ano = document.querySelector("#ano").value
    var msg = document.querySelector("#msg")
    var rst;
    // Verificando seu o usuário quer o ano atual
    ano = (ano == 0) ? new Date().getFullYear(): ano

    // Verificando se é divisível por 4
    if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0){
        rst = 'é'
    }else{
        rst = 'não é'
    }
    msg.innerHTML = `O ano ${ano} ${rst} bissexto!`

}
