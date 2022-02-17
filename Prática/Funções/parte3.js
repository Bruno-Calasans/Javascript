

// function enclosure
function teste(){
    let x = 100

    // teste2() tem acesso à variável x
    function teste2(){
        let y = 0
        console.log(x)

        // teste() também tem acesso à variável x e y
        function teste3(){
            let z = 10
            var w = 666
            console.log(x, y, z)
            
        }
        teste3()
        
    }
    
    teste2()
    
}

teste()

