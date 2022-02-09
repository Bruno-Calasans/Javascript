var hora = new Date().getHours();
var msg;

if (hora < 12){
    msg = 'Bom dia'
}else if(hora < 18){
    msg = 'Boa tarde'
}else{
    msg = 'Boa noite, gostosa'
}

console.log(msg, hora)