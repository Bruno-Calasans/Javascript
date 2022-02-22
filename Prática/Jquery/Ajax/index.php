<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Usando ajax</title>
    <script 
    src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="ajax.js"></script>
</head>
<body>
    <h1>Usando Ajax</h1>
    
    <div>
        <button id="btn1">Clique em mim</button>
        <p id="p1">Texto vai aparecer aqui</p>
    </div>
    
    <script>

        $('#btn1').click(
            ()=>{
                $.ajax(
                {   
                    url: 'dados.php',
                    type: 'GET',
                    success: function(dados){

                        $('#p1').text(dados)

                    },
                    error: function(){
                        console.log('Erro')
                    }
                }
                )
            }

        )
       
    </script>
</body>
</html>