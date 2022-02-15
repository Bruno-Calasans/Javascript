

// function enclosure
function teste(){

    let x = 100

    // teste2() tem acesso à variável x
    function teste2(){
        console.log(x);
    }
    teste2();
}

