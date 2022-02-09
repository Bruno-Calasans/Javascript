var idade = 70;
var rst;

// Segunda forma
if (idade < 16){
    rst = 'não vota'
}else if (idade < 18){
    rst = 'voto opcional'
}else if(idade < 65){
    rst = 'voto obrigatório'
}else{
    rst = 'voto opcional'
}

console.log(rst)

