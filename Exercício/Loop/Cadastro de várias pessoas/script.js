var submit = document.getElementById('submit')
submit.addEventListener('click', analisar)

var cadastro = document.getElementById('cadastrar')
cadastro.addEventListener('click', cadastrar)
var cont = 1

function cadastrar(){ // função que insere novo input
    cont++
    var pessoas = document.getElementById('pessoas') // p com id pessoa

    //Criando uma cópia do formulário inicial
    var form = document.getElementById('form1') //div com id form
    var form_copia = form.cloneNode(true) // cópia da div#form
    form_copia.id = `form${cont}`

    // Alterando os id's
    form_copia.children[0].innerText = `Dados pessoais - ${cont}ª pessoa`
    form_copia.children[2].id = `nome${cont}` //input nome
    form_copia.children[5].id = `idade${cont}` //input idade
    form_copia.children[8].id = `sexo${cont}` //input sexo
    
    // limpando os valores
    form_copia.children[2].value = ''
    form_copia.children[5].value = ''

    // colocando outra div dentro de p#pessoa    
    pessoas.appendChild(form_copia)
}

function analisar(){ // função para analisar os dados
    var pessoas = document.getElementById('pessoas')
    var n = pessoas.children.length

     // Definindo variáveis de controle
     var maior18 = 0; 
     var idadeNova = 0; var idadeVelha = 0;
     var pessoaVelha = ''; var pessoaNova = '';
     var homem = 0; var mulher = 0

    for (var cont = 0; cont < n; cont++){

        // Pegandos os valores de cada formulário
        var nome = document.getElementById(`nome${cont + 1}`).value
        var idade = document.getElementById(`idade${cont + 1}`).value
        var sexo = document.getElementById(`sexo${cont + 1}`).value
        
        if (nome == '' || idade == ''){
            alert('Erro: todos os campos devem ser preenchidos!')

        }else{

            // Pegando e limpando elemento que exibirá o texto
            var txt = document.getElementById('resultado')
            txt.innerHTML = ''
            
            // Somando o número de pessoas na maioridade
            maior18 += (idade >= 18)? 1: 0;

            // Contando o número de homens e mulheres
            if (sexo == 'm'){
                homem++

            }else{
                mulher++
            }

            // Achando o nome e idade da pessoa mais nova
            if (cont == 0){
                pessoaNova = nome
                idadeNova = idade

            }else{

                if (idade <= idadeNova){
                    pessoaNova = nome
                    idadeNova = idade
                }
            }

            // Achando nome e idade da pessoa mais velha
            if (idade >= idadeVelha){
                pessoaVelha = nome
                idadeVelha = idade
            }
            
        }
    }
    // Alterando o texto resultado
    txt.innerHTML = `\
    <b>Número de pessoas:</b> ${n} <br>
    <b>Número de pessoas na maioridade:</b> ${maior18} <br>
    <b>Pessoa mais velha:</b> ${pessoaVelha} (${idadeVelha} anos) <br>
    <b>Pessoa mais nova:</b> ${pessoaNova} (${idadeNova} anos) <br>
    <b>Número de homens:</b> ${homem} <br>
    <b>Número de mulheres:</b> ${mulher}
    `
}
