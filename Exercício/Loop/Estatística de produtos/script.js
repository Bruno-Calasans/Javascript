var submit = document.getElementById('submit')
submit.addEventListener('click', analisar)

var cadastro = document.getElementById('inserir')
cadastro.addEventListener('click', inserir)
var cont = 1

function inserir(){ // função que insere novo input
    cont++
    var produtos = document.getElementById('produtos') // p com id pessoa

    //Criando uma cópia do formulário inicial
    var form = document.getElementById('form1') //div com id form
    var form_copia = form.cloneNode(true) // cópia da div#form
    form_copia.id = `form${cont}`
    console.log(form.children)
    // Alterando os id's
    form_copia.children[0].innerText = `Dados de Produtos - ${cont}º produto`
    form_copia.children[2].id = `nome${cont}` //input nome
    form_copia.children[5].id = `preço${cont}` //input preço
    
    // limpando os valores
    form_copia.children[2].value = ''
    form_copia.children[5].value = ''

    // colocando outra div dentro de p#pessoa    
    produtos.appendChild(form_copia)
}

function analisar(){ // função para analisar os dados
    var produtos = document.getElementById('produtos')
    var n = produtos.children.length

    // definindo variáveis de controle
    var soma = 0; 
    var prodCaro = ''; var prodBarato = ''
    var pCaro = 0; var pBarato = 0

    // Pegando texto
    var txt = document.getElementById('resultado')
    txt.innerHTML = ''

    for (var cont = 0; cont < n; cont++){
        var nome = document.getElementById(`nome${cont + 1}`).value
        var preço = Number(document.getElementById(`preço${cont + 1}`).value)

        if (nome == '' || preço ==''){
            alert('Erro: todos os campos devem ser preenchidos!')
            break

        }else{

            // Somando todos os produtos
            soma += preço

            // achando o produto mais barato
            if (cont == 0){
                prodBarato = nome
                pBarato = preço

            }else{

                if (preço < pBarato){
                    prodBarato = nome
                    pBarato = preço
                }
            }
            // achando o produto mais caro
            if (preço > pCaro){
                prodCaro = nome
                pCaro = preço
            }

        }

    }
    // Alterando o texto resultado
    txt.innerHTML = `\
    <b>Número de produtos cadastrados:</b> ${n} <br>
    <b>Produto mais barato:</b> ${prodBarato} R$${pBarato} <br>
    <b>Produto mais caro:</b> ${prodCaro} R$${pCaro} <br>
    <b>Valor total:</b> R$${soma}`
    
    
}
