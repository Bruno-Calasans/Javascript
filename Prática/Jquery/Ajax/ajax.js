

    // exmeplo de ajax com jQuery
    $('#btn1').click(
        ()=>{
            $.ajax(
            {   
                url: 'teste.json',
                type: 'GET',
                success: function(dados){
                    let teste = JSON.stringify(dados)
                    $('#p1').text(teste)
                   
                },
                error: function(xhr, status, error){
                    console.log(error)
                }
            }
            )
        }

    )

    // usando o método POST
    $('#btn2').click(
        ()=>{
            $.ajax(
            {
                url: 'dados.php',
                type: 'POST',
                data: {nome: 'John', sobrenome: 'Jones'},
                success: function(dados){
                    $('#p2').text(dados)

                },
                error: function(xhr, status, error){
                    $('#p2').text(error)

                }
            }

            )
        }
    )
    